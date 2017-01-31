var lastamount;
var bitcoinmarketcap;
var bitcoinprice;
var assumedcomparepercentage = 10;
var assumedcompany = "Mastercard";
var assumedsymbol = "MA";

jQuery(document).ready(function () {
		var container = jQuery(".chart");

		container.css("min-width", container.width());
		container.css("max-width", container.width());
		jQuery(".fa-spin").css("margin-left", container.width() / 2);
});

google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawCharts);

var options = {
		'curveType': "function",
		'hAxis': { format: "MMM yy" },
		'legend': { position: 'none' },
		'vAxis': { textPosition: 'in' }
};

function drawCharts() {
		renderChartData('marketprice',	'market-price',	'', 'Price of Bitcoin (USD)', 'Market Price in US Dollars');
		renderChartData('circulation',	'total-bitcoins', '', 'Total Bitcoins',	'Bitcoins in Circulation');
		renderChartData('transaction',	'n-transactions-excluding-popular', '&timespan=all&daysAverageString=14', 'Total Transactions', 'Number of transactions');
		renderChartData('marketcap',	'market-cap','&timespan=1year&daysAverageString=7',	'Market Cap (USD)',	'Market Capitalization in US Dollars');
}

function renderChartData(_chartName, _chartType, _params, _axisText, _optionTitle) {
		var datatable = new google.visualization.DataTable();
		datatable.addColumn('date', 'Date');
		datatable.addColumn('number', _axisText);

		var chartData = "//api.blockchain.info/charts/" + _chartType + "?" + _params + "&cors=true&format=json&lang=en";

		jQuery
			.getJSON(chartData, function (data) {
				var rawdata = data.values;
				for (var i = 0; i < rawdata.length; ++i) {
					var y = rawdata[i].y;
					datatable.addRows([[new Date(parseInt(rawdata[i].x) * 1000), parseFloat(y)]]);
				}
				lastamount = rawdata[rawdata.length - 1].y;
		})
			.done(function () {
				options.title = _optionTitle;
				drawChart('chart_' + _chartName, datatable, options);
				renderRemainingCoins(200);
				//renderRemainingDays();
			});
}

function drawChart(_chart, _datatable, _options) {
		jQuery(document).ready(function () {
				options.width = jQuery(".chart").width() * 1.00;
				var chart = new google.visualization.LineChart(document.getElementById(_chart));
				chart.draw(_datatable, _options);
		});
}

function addCommas(nStr) {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
}

function renderRemainingCoins(val) {
	jQuery(".days_till_all_mined .hgr_number_string").attr("data-to", val);
	//jQuery(".coins_till_all_mined .hgr_counter_number .hgr_number_string").html("<p>coins_till_all_mined</p>");
}

function renderRemainingDays() {
	//jQuery(".days_till_all_mined .hgr_counter_number .hgr_number_string").append("!!!!!!!");
}


