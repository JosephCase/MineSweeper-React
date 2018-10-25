import matrixHelper from '../../helpers/matrixHelper';
// import Worker from './index.worker.js';

onmessage = function(message) {
	
	const { grid, x, y } = message.data;

	console.log('message recieved', grid, x, y);

	let cellsToOpen = [{x, y}];

	let promises = [];

	if (grid[x][y].adjacentMines === 0) {
			
		matrixHelper.forAdjacent(grid, x, y, (cell, i, j) => {
			if(!cell.open && !cell.marked) {
				promises.push(addCells(grid, i, j));
			}
		})
	}

	Promise.all(promises).then(res => {
		res.forEach(response => {
			cellsToOpen = [...cellsToOpen, ...response];
		});
		postMessage(cellsToOpen);
	})

}

const addCells = (grid, x, y) => {

	return new Promise(res => {
		const worker = new Worker();
		worker.postMessage(grid, i, j);
		worker.onmessage = function(e) {
				const childCells = e.data;
				cellsToOpen = [...cellsToOpen, ...childCells];
				postMessage(cellsToOpen)
		}
	})
	
}