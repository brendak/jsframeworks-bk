// Sort Feature

function sortTable(table, col, reverse) {
	var tb = table.tBodies[0],
		tr = Array.prototype.slice.call(tb.rows, 0),
		i;
	reverse = -((+reverse) || -1);
	tr = tr.sort(function(a, b) {
		return reverse * (a.cells[col].textContent.trim()
			.localeCompare(b.cells[col].textContent.trim())
			);
	});
	for (i = 0; i < tr.length; ++i) tb.appendChild(tr[i]);
}

function makeSortable(table) {
	var th = table.tHead,
		i;
	th && (th = th.rows[0]) && (th = th.cells);
	if (th) i = th.length;
	else return;
	while (--i >= 0)(function(i) {
		var dir = 1;
		th[i].addEventListener('click', function() {
			sortTable(table, i, (dir = 1 - dir))
		});
	}(i));
}

function makeAllSortable(parent) {
	parent = parent || document.body;
	var t = parent.getElementsByTagName('table'),
		i = t.length;
	while (--i >= 0) makeSortable(t[i]);
}

window.onload = function() {
	makeAllSortable();
};


// Filter Feature

(function(document) {
	'use strict';

	var TableFilter = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(),
				val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('filter-table');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			TableFilter.init();
		}
	});
})(document);
