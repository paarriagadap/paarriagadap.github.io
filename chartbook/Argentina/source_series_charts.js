var app = angular.module('plunker', ['nvd3']);

app.controller('MainCtrl', function ($scope) {
    $scope.options = {
        chart: {
            type: 'multiChart',
            height: 450,
            margin: {
                top: 30,
                right: 60,
                bottom: 50,
                left: 70
            },
            color: d3.scale.category10().range(),
            duration: 500,
            yAxis1: {
                tickFormat: function (d) {
                    return d3.format(',.1f')(d);
                }
            },
            interpolate: false,
            legend: {
                align: false,
                height: 200,
                margin: {
                    top: 10,
                    bottom: 25,
                }
            },
        }
    };

    //insert data
    $scope.data0 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1953, 'y': 35.46518804, 'series': 0 }, { 'x': 1959, 'y': 39.63234764, 'series': 0 }, { 'x': 1961, 'y': 37.14978448, 'series': 0 }, { 'x': 1972, 'y': 31.29802845, 'series': 0 }, { 'x': 1974, 'y': 31.29802845, 'series': 0 }, { 'x': 1980, 'y': 36.5692736, 'series': 0 }, { 'x': 1986, 'y': 39.40330555, 'series': 0 }, { 'x': 1987, 'y': 41.88035719, 'series': 0 }, { 'x': 1988, 'y': 42.54104107, 'series': 0 }, { 'x': 1991, 'y': 42.95453613, 'series': 0 }, { 'x': 1992, 'y': 41.20932717, 'series': 0 }, { 'x': 1993, 'y': 40.61089867, 'series': 0 }, { 'x': 1994, 'y': 41.35188189, 'series': 0 }, { 'x': 1995, 'y': 44.1076774, 'series': 0 }, { 'x': 1996, 'y': 44.38794129, 'series': 0 }, { 'x': 1997, 'y': 44.20794641, 'series': 0 }, { 'x': 1998, 'y': 46.02134752, 'series': 0 }, { 'x': 1999, 'y': 45.0390503, 'series': 0 }, { 'x': 2000, 'y': 46.41804189, 'series': 0 }, { 'x': 2001, 'y': 48.23455186, 'series': 0 }, { 'x': 2002, 'y': 49.29729443, 'series': 0 }, { 'x': 2003, 'y': 48.6614, 'series': 0 }, { 'x': 2004, 'y': 46.605, 'series': 0 }, { 'x': 2005, 'y': 45.545, 'series': 0 }, { 'x': 2006, 'y': 44.41, 'series': 0 }, { 'x': 2007, 'y': 43.71, 'series': 0 }, { 'x': 2008, 'y': 42.47, 'series': 0 }, { 'x': 2009, 'y': 42.005, 'series': 0 }, { 'x': 2010, 'y': 41.755, 'series': 0 }, { 'x': 2011, 'y': 39.845, 'series': 0 }, { 'x': 2012, 'y': 38.63, 'series': 0 }, { 'x': 2013, 'y': 38.405, 'series': 0 }, { 'x': 2014, 'y': 38.34, 'series': 0 }, { 'x': 2015, 'y': 37.6971, 'series': 0 }, { 'x': 2016, 'y': 39.0775, 'series': 0 }, { 'x': 2017, 'y': 38.54, 'series': 0 }, { 'x': 2018, 'y': 38.66, 'series': 0 }, { 'x': 2019, 'y': 39.7135, 'series': 0 }], yAxis: 1 }, { key: 'Altimir (1986) - Household income', type: 'scatter', values: [{ 'x': 1953, 'y': 40.0, 'series': 1 }, { 'x': 1959, 'y': 44.7, 'series': 1 }, { 'x': 1961, 'y': 41.9, 'series': 1 }, { 'x': 1972, 'y': 35.3, 'series': 1 }, { 'x': 1980, 'y': 37.6, 'series': 1 }, { 'x': 1986, 'y': 40.5, 'series': 1 }, { 'x': 1987, 'y': 43.1, 'series': 1 }, { 'x': 1988, 'y': 43.7, 'series': 1 }, { 'x': 1991, 'y': 44.2, 'series': 1 }, { 'x': 1992, 'y': 42.4, 'series': 1 }, { 'x': 2019, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2020) Inequality - Equivalised household income (Greater Buenos Aires)', type: 'scatter', values: [{ 'x': 1953, 'y': null, 'series': 0 }, { 'x': 1974, 'y': 32.18702, 'series': 2 }, { 'x': 1980, 'y': 37.60799, 'series': 2 }, { 'x': 1986, 'y': 40.52252, 'series': 2 }, { 'x': 1987, 'y': 43.06993, 'series': 2 }, { 'x': 1988, 'y': 43.74938, 'series': 2 }, { 'x': 1991, 'y': 44.17462, 'series': 2 }, { 'x': 1992, 'y': 42.37984, 'series': 2 }, { 'x': 2019, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2020) Inequality - Equivalised household income (15 main cities)', type: 'scatter', values: [{ 'x': 1953, 'y': null, 'series': 0 }, { 'x': 1992, 'y': 42.94821, 'series': 3 }, { 'x': 1993, 'y': 42.32453, 'series': 3 }, { 'x': 1994, 'y': 43.09678, 'series': 3 }, { 'x': 1995, 'y': 45.96886, 'series': 3 }, { 'x': 1996, 'y': 46.26095, 'series': 3 }, { 'x': 1997, 'y': 46.07336, 'series': 3 }, { 'x': 1998, 'y': 47.96328, 'series': 3 }, { 'x': 2019, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2020) Inequality - Equivalised household income (28 main cities)', type: 'scatter', values: [{ 'x': 1953, 'y': null, 'series': 0 }, { 'x': 1998, 'y': 47.83179, 'series': 4 }, { 'x': 1999, 'y': 46.81085, 'series': 4 }, { 'x': 2000, 'y': 48.24409, 'series': 4 }, { 'x': 2001, 'y': 50.13206, 'series': 4 }, { 'x': 2002, 'y': 51.23661, 'series': 4 }, { 'x': 2003, 'y': 50.5757, 'series': 4 }, { 'x': 2019, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2020) Inequality - Equivalised household income (EPHC)', type: 'scatter', values: [{ 'x': 1953, 'y': null, 'series': 0 }, { 'x': 2003, 'y': 48.6614, 'series': 5 }, { 'x': 2004, 'y': 46.605, 'series': 5 }, { 'x': 2005, 'y': 45.545, 'series': 5 }, { 'x': 2006, 'y': 44.41, 'series': 5 }, { 'x': 2007, 'y': 43.71, 'series': 5 }, { 'x': 2008, 'y': 42.47, 'series': 5 }, { 'x': 2009, 'y': 42.005, 'series': 5 }, { 'x': 2010, 'y': 41.755, 'series': 5 }, { 'x': 2011, 'y': 39.845, 'series': 5 }, { 'x': 2012, 'y': 38.63, 'series': 5 }, { 'x': 2013, 'y': 38.405, 'series': 5 }, { 'x': 2014, 'y': 38.34, 'series': 5 }, { 'x': 2015, 'y': 37.6971, 'series': 5 }, { 'x': 2016, 'y': 39.0775, 'series': 5 }, { 'x': 2017, 'y': 38.54, 'series': 5 }, { 'x': 2018, 'y': 38.66, 'series': 5 }, { 'x': 2019, 'y': 39.7135, 'series': 5 }], yAxis: 1 }];
    $scope.data1 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1932, 'y': 16.56, 'series': 0 }, { 'x': 1933, 'y': 15.16, 'series': 0 }, { 'x': 1934, 'y': 15.93, 'series': 0 }, { 'x': 1935, 'y': 16.27, 'series': 0 }, { 'x': 1936, 'y': 18.0, 'series': 0 }, { 'x': 1937, 'y': 18.03, 'series': 0 }, { 'x': 1938, 'y': 18.06, 'series': 0 }, { 'x': 1939, 'y': 18.42, 'series': 0 }, { 'x': 1940, 'y': 17.74, 'series': 0 }, { 'x': 1941, 'y': 19.79, 'series': 0 }, { 'x': 1942, 'y': 20.97, 'series': 0 }, { 'x': 1943, 'y': 22.9, 'series': 0 }, { 'x': 1944, 'y': 21.84, 'series': 0 }, { 'x': 1945, 'y': 20.64, 'series': 0 }, { 'x': 1946, 'y': 19.97, 'series': 0 }, { 'x': 1947, 'y': 21.19, 'series': 0 }, { 'x': 1948, 'y': 20.49, 'series': 0 }, { 'x': 1949, 'y': 17.06, 'series': 0 }, { 'x': 1950, 'y': 17.48, 'series': 0 }, { 'x': 1951, 'y': 14.96, 'series': 0 }, { 'x': 1952, 'y': 14.08, 'series': 0 }, { 'x': 1953, 'y': 13.54, 'series': 0 }, { 'x': 1954, 'y': 14.59, 'series': 0 }, { 'x': 1956, 'y': 13.82, 'series': 0 }, { 'x': 1958, 'y': 12.5, 'series': 0 }, { 'x': 1959, 'y': 14.05, 'series': 0 }, { 'x': 1961, 'y': 12.95, 'series': 0 }, { 'x': 1980, 'y': 12.63, 'series': 0 }, { 'x': 1981, 'y': 12.63, 'series': 0 }, { 'x': 1982, 'y': 12.63, 'series': 0 }, { 'x': 1983, 'y': 12.63, 'series': 0 }, { 'x': 1984, 'y': 12.63, 'series': 0 }, { 'x': 1985, 'y': 12.63, 'series': 0 }, { 'x': 1986, 'y': 12.63, 'series': 0 }, { 'x': 1987, 'y': 12.63, 'series': 0 }, { 'x': 1988, 'y': 12.63, 'series': 0 }, { 'x': 1989, 'y': 12.63, 'series': 0 }, { 'x': 1990, 'y': 12.63, 'series': 0 }, { 'x': 1991, 'y': 12.63, 'series': 0 }, { 'x': 1992, 'y': 12.63, 'series': 0 }, { 'x': 1993, 'y': 12.63, 'series': 0 }, { 'x': 1994, 'y': 12.63, 'series': 0 }, { 'x': 1995, 'y': 12.63, 'series': 0 }, { 'x': 1996, 'y': 12.63, 'series': 0 }, { 'x': 1997, 'y': 10.93, 'series': 0 }, { 'x': 1998, 'y': 11.09, 'series': 0 }, { 'x': 1999, 'y': 11.94, 'series': 0 }, { 'x': 2000, 'y': 12.65, 'series': 0 }, { 'x': 2001, 'y': 12.99, 'series': 0 }, { 'x': 2002, 'y': 14.08, 'series': 0 }, { 'x': 2003, 'y': 12.77, 'series': 0 }, { 'x': 2004, 'y': 11.46, 'series': 0 }, { 'x': 2005, 'y': 9.9, 'series': 0 }, { 'x': 2006, 'y': 11.07, 'series': 0 }, { 'x': 2007, 'y': 13.91, 'series': 0 }, { 'x': 2008, 'y': 10.57, 'series': 0 }, { 'x': 2009, 'y': 10.46, 'series': 0 }, { 'x': 2010, 'y': 10.59, 'series': 0 }, { 'x': 2011, 'y': 10.55, 'series': 0 }, { 'x': 2012, 'y': 7.83, 'series': 0 }, { 'x': 2013, 'y': 9.29, 'series': 0 }, { 'x': 2014, 'y': 9.32, 'series': 0 }, { 'x': 2015, 'y': 10.61, 'series': 0 }, { 'x': 2016, 'y': 11.89, 'series': 0 }, { 'x': 2017, 'y': 13.17, 'series': 0 }, { 'x': 2018, 'y': 15.34, 'series': 0 }, { 'x': 2019, 'y': 17.51, 'series': 0 }, { 'x': 2020, 'y': 17.51, 'series': 0 }], yAxis: 1 }, { key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [{ 'x': 1932, 'y': 16.56, 'series': 1 }, { 'x': 1933, 'y': 15.16, 'series': 1 }, { 'x': 1934, 'y': 15.93, 'series': 1 }, { 'x': 1935, 'y': 16.27, 'series': 1 }, { 'x': 1936, 'y': 18.0, 'series': 1 }, { 'x': 1937, 'y': 18.03, 'series': 1 }, { 'x': 1938, 'y': 18.06, 'series': 1 }, { 'x': 1939, 'y': 18.42, 'series': 1 }, { 'x': 1940, 'y': 17.74, 'series': 1 }, { 'x': 1941, 'y': 19.79, 'series': 1 }, { 'x': 1942, 'y': 20.97, 'series': 1 }, { 'x': 1943, 'y': 22.9, 'series': 1 }, { 'x': 1944, 'y': 21.84, 'series': 1 }, { 'x': 1945, 'y': 20.64, 'series': 1 }, { 'x': 1946, 'y': 19.97, 'series': 1 }, { 'x': 1947, 'y': 21.19, 'series': 1 }, { 'x': 1948, 'y': 20.49, 'series': 1 }, { 'x': 1949, 'y': 17.06, 'series': 1 }, { 'x': 1950, 'y': 17.48, 'series': 1 }, { 'x': 1951, 'y': 14.96, 'series': 1 }, { 'x': 1952, 'y': 14.08, 'series': 1 }, { 'x': 1953, 'y': 13.54, 'series': 1 }, { 'x': 1954, 'y': 14.59, 'series': 1 }, { 'x': 1956, 'y': 13.82, 'series': 1 }, { 'x': 1958, 'y': 12.5, 'series': 1 }, { 'x': 1959, 'y': 14.05, 'series': 1 }, { 'x': 1961, 'y': 12.95, 'series': 1 }, { 'x': 1980, 'y': 12.63, 'series': 1 }, { 'x': 1981, 'y': 12.63, 'series': 1 }, { 'x': 1982, 'y': 12.63, 'series': 1 }, { 'x': 1983, 'y': 12.63, 'series': 1 }, { 'x': 1984, 'y': 12.63, 'series': 1 }, { 'x': 1985, 'y': 12.63, 'series': 1 }, { 'x': 1986, 'y': 12.63, 'series': 1 }, { 'x': 1987, 'y': 12.63, 'series': 1 }, { 'x': 1988, 'y': 12.63, 'series': 1 }, { 'x': 1989, 'y': 12.63, 'series': 1 }, { 'x': 1990, 'y': 12.63, 'series': 1 }, { 'x': 1991, 'y': 12.63, 'series': 1 }, { 'x': 1992, 'y': 12.63, 'series': 1 }, { 'x': 1993, 'y': 12.63, 'series': 1 }, { 'x': 1994, 'y': 12.63, 'series': 1 }, { 'x': 1995, 'y': 12.63, 'series': 1 }, { 'x': 1996, 'y': 12.63, 'series': 1 }, { 'x': 1997, 'y': 10.93, 'series': 1 }, { 'x': 1998, 'y': 11.09, 'series': 1 }, { 'x': 1999, 'y': 11.94, 'series': 1 }, { 'x': 2000, 'y': 12.65, 'series': 1 }, { 'x': 2001, 'y': 12.99, 'series': 1 }, { 'x': 2002, 'y': 14.08, 'series': 1 }, { 'x': 2003, 'y': 12.77, 'series': 1 }, { 'x': 2004, 'y': 11.46, 'series': 1 }, { 'x': 2005, 'y': 9.9, 'series': 1 }, { 'x': 2006, 'y': 11.07, 'series': 1 }, { 'x': 2007, 'y': 13.91, 'series': 1 }, { 'x': 2008, 'y': 10.57, 'series': 1 }, { 'x': 2009, 'y': 10.46, 'series': 1 }, { 'x': 2010, 'y': 10.59, 'series': 1 }, { 'x': 2011, 'y': 10.55, 'series': 1 }, { 'x': 2012, 'y': 7.83, 'series': 1 }, { 'x': 2013, 'y': 9.29, 'series': 1 }, { 'x': 2014, 'y': 9.32, 'series': 1 }, { 'x': 2015, 'y': 10.61, 'series': 1 }, { 'x': 2016, 'y': 11.89, 'series': 1 }, { 'x': 2017, 'y': 13.17, 'series': 1 }, { 'x': 2018, 'y': 15.34, 'series': 1 }, { 'x': 2019, 'y': 17.51, 'series': 1 }, { 'x': 2020, 'y': 17.51, 'series': 1 }], yAxis: 1 }];
    $scope.data2 = [{ key: 'Chartbook series', type: 'line', values: [{ 'x': 1974, 'y': 15.59646877, 'series': 0 }, { 'x': 1980, 'y': 19.96670351, 'series': 0 }, { 'x': 1986, 'y': 20.93827757, 'series': 0 }, { 'x': 1987, 'y': 22.10183882, 'series': 0 }, { 'x': 1988, 'y': 25.62690196, 'series': 0 }, { 'x': 1991, 'y': 20.46386117, 'series': 0 }, { 'x': 1992, 'y': 20.46718974, 'series': 0 }, { 'x': 1993, 'y': 21.03303227, 'series': 0 }, { 'x': 1994, 'y': 21.68489233, 'series': 0 }, { 'x': 1995, 'y': 22.17860362, 'series': 0 }, { 'x': 1996, 'y': 23.60152392, 'series': 0 }, { 'x': 1997, 'y': 23.26194306, 'series': 0 }, { 'x': 1998, 'y': 22.95208115, 'series': 0 }, { 'x': 1999, 'y': 22.40679353, 'series': 0 }, { 'x': 2000, 'y': 24.40462941, 'series': 0 }, { 'x': 2001, 'y': 24.99232087, 'series': 0 }, { 'x': 2002, 'y': 25.86004913, 'series': 0 }, { 'x': 2003, 'y': 24.803722, 'series': 0 }, { 'x': 2004, 'y': 24.154651, 'series': 0 }, { 'x': 2005, 'y': 23.5816645, 'series': 0 }, { 'x': 2006, 'y': 23.7240405, 'series': 0 }, { 'x': 2007, 'y': 23.467383, 'series': 0 }, { 'x': 2008, 'y': 22.3998315, 'series': 0 }, { 'x': 2009, 'y': 22.5164605, 'series': 0 }, { 'x': 2010, 'y': 22.38885, 'series': 0 }, { 'x': 2011, 'y': 20.734092, 'series': 0 }, { 'x': 2012, 'y': 20.946938, 'series': 0 }, { 'x': 2013, 'y': 20.239564, 'series': 0 }, { 'x': 2014, 'y': 19.9789205, 'series': 0 }, { 'x': 2015, 'y': 19.814273, 'series': 0 }, { 'x': 2016, 'y': 20.723163, 'series': 0 }, { 'x': 2017, 'y': 19.8866585, 'series': 0 }, { 'x': 2018, 'y': 20.208918, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2016) Poverty - Household per capita income (Greater Buenos Aires)', type: 'scatter', values: [{ 'x': 1974, 'y': 13.11978, 'series': 1 }, { 'x': 1980, 'y': 16.79603, 'series': 1 }, { 'x': 1986, 'y': 17.61332, 'series': 1 }, { 'x': 1987, 'y': 18.59211, 'series': 1 }, { 'x': 1988, 'y': 21.5574, 'series': 1 }, { 'x': 1991, 'y': 17.21424, 'series': 1 }, { 'x': 1992, 'y': 17.21704, 'series': 1 }, { 'x': 2018, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2016) Poverty - Household per capita income (15 main cities)', type: 'scatter', values: [{ 'x': 1974, 'y': null, 'series': 0 }, { 'x': 1992, 'y': 19.55884, 'series': 2 }, { 'x': 1993, 'y': 20.09957, 'series': 2 }, { 'x': 1994, 'y': 20.7225, 'series': 2 }, { 'x': 1995, 'y': 21.1943, 'series': 2 }, { 'x': 1996, 'y': 22.55407, 'series': 2 }, { 'x': 1997, 'y': 22.22956, 'series': 2 }, { 'x': 1998, 'y': 21.93345, 'series': 2 }, { 'x': 2018, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2016) Poverty - Household per capita income (28 main cities)', type: 'scatter', values: [{ 'x': 1974, 'y': null, 'series': 0 }, { 'x': 1998, 'y': 23.02037, 'series': 3 }, { 'x': 1999, 'y': 22.47346, 'series': 3 }, { 'x': 2000, 'y': 24.47724, 'series': 3 }, { 'x': 2001, 'y': 25.06668, 'series': 3 }, { 'x': 2002, 'y': 25.93699, 'series': 3 }, { 'x': 2003, 'y': 24.87752, 'series': 3 }, { 'x': 2018, 'y': null, 'series': 0 }], yAxis: 1 }, { key: 'SEDLAC (2020) Poverty - Household per capita income (EPHC) (28 main cities)', type: 'scatter', values: [{ 'x': 1974, 'y': null, 'series': 0 }, { 'x': 2003, 'y': 24.803722, 'series': 4 }, { 'x': 2004, 'y': 24.154651, 'series': 4 }, { 'x': 2005, 'y': 23.5816645, 'series': 4 }, { 'x': 2006, 'y': 23.7240405, 'series': 4 }, { 'x': 2007, 'y': 23.467383, 'series': 4 }, { 'x': 2008, 'y': 22.3998315, 'series': 4 }, { 'x': 2009, 'y': 22.5164605, 'series': 4 }, { 'x': 2010, 'y': 22.38885, 'series': 4 }, { 'x': 2011, 'y': 20.734092, 'series': 4 }, { 'x': 2012, 'y': 20.946938, 'series': 4 }, { 'x': 2013, 'y': 20.239564, 'series': 4 }, { 'x': 2014, 'y': 19.9789205, 'series': 4 }, { 'x': 2015, 'y': 19.814273, 'series': 4 }, { 'x': 2016, 'y': 20.723163, 'series': 4 }, { 'x': 2017, 'y': 19.8866585, 'series': 4 }, { 'x': 2018, 'y': 20.208918, 'series': 4 }], yAxis: 1 }]
});