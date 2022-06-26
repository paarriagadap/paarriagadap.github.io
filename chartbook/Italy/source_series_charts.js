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
$scope.data0 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1901, 'y': 48.5, 'series': 0},
 {'x': 1911, 'y': 46.0, 'series': 0},
 {'x': 1921, 'y': 45.1, 'series': 0},
 {'x': 1931, 'y': 44.9, 'series': 0},
 {'x': 1948, 'y': 41.6, 'series': 0},
 {'x': 1967, 'y': 39.1, 'series': 0},
 {'x': 1968, 'y': 40.8, 'series': 0},
 {'x': 1969, 'y': 39.7, 'series': 0},
 {'x': 1970, 'y': 38.3, 'series': 0},
 {'x': 1971, 'y': 39.7, 'series': 0},
 {'x': 1972, 'y': 38.5, 'series': 0},
 {'x': 1973, 'y': 40.0, 'series': 0},
 {'x': 1974, 'y': 39.1, 'series': 0},
 {'x': 1975, 'y': 35.2, 'series': 0},
 {'x': 1977, 'y': 34.9, 'series': 0},
 {'x': 1978, 'y': 33.3, 'series': 0},
 {'x': 1979, 'y': 34.6, 'series': 0},
 {'x': 1980, 'y': 32.5, 'series': 0},
 {'x': 1981, 'y': 31.9, 'series': 0},
 {'x': 1982, 'y': 29.5, 'series': 0},
 {'x': 1983, 'y': 30.1, 'series': 0},
 {'x': 1984, 'y': 31.9, 'series': 0},
 {'x': 1986, 'y': 31.0, 'series': 0},
 {'x': 1987, 'y': 32.2, 'series': 0},
 {'x': 1989, 'y': 29.6, 'series': 0},
 {'x': 1991, 'y': 29.3, 'series': 0},
 {'x': 1993, 'y': 32.7, 'series': 0},
 {'x': 1995, 'y': 33.2, 'series': 0},
 {'x': 1998, 'y': 33.6, 'series': 0},
 {'x': 2000, 'y': 33.3, 'series': 0},
 {'x': 2002, 'y': 33.3, 'series': 0},
 {'x': 2004, 'y': 34.9, 'series': 0},
 {'x': 2006, 'y': 33.8, 'series': 0},
 {'x': 2008, 'y': 33.3, 'series': 0},
 {'x': 2010, 'y': 34.7, 'series': 0},
 {'x': 2012, 'y': 35.0, 'series': 0}], yAxis: 1},
 {key: 'Vecchi (forthcoming) - Income per capita', type: 'scatter', values: [
{'x': 1901, 'y': 48.5, 'series': 1},
 {'x': 1911, 'y': 46.0, 'series': 1},
 {'x': 1921, 'y': 45.1, 'series': 1},
 {'x': 1931, 'y': 44.9, 'series': 1},
 {'x': 1948, 'y': 41.6, 'series': 1},
 {'x': 1967, 'y': 39.1, 'series': 1},
 {'x': 1968, 'y': 40.8, 'series': 1},
 {'x': 1969, 'y': 39.7, 'series': 1},
 {'x': 1970, 'y': 38.3, 'series': 1},
 {'x': 1971, 'y': 39.7, 'series': 1},
 {'x': 1972, 'y': 38.5, 'series': 1},
 {'x': 1973, 'y': 40.0, 'series': 1},
 {'x': 1974, 'y': 39.1, 'series': 1},
 {'x': 1975, 'y': 35.2, 'series': 1},
 {'x': 1977, 'y': 34.9, 'series': 1},
 {'x': 1978, 'y': 33.3, 'series': 1},
 {'x': 1979, 'y': 34.6, 'series': 1},
 {'x': 1980, 'y': 32.5, 'series': 1},
 {'x': 1981, 'y': 31.9, 'series': 1},
 {'x': 1982, 'y': 29.5, 'series': 1},
 {'x': 1983, 'y': 30.1, 'series': 1},
 {'x': 1984, 'y': 31.9, 'series': 1},
 {'x': 1986, 'y': 31.0, 'series': 1},
 {'x': 1987, 'y': 32.2, 'series': 1},
 {'x': 1989, 'y': 29.6, 'series': 1},
 {'x': 1991, 'y': 29.3, 'series': 1},
 {'x': 1993, 'y': 32.7, 'series': 1},
 {'x': 1995, 'y': 33.2, 'series': 1},
 {'x': 1998, 'y': 33.6, 'series': 1},
 {'x': 2000, 'y': 33.3, 'series': 1},
 {'x': 2002, 'y': 33.3, 'series': 1},
 {'x': 2004, 'y': 34.9, 'series': 1},
 {'x': 2006, 'y': 33.8, 'series': 1},
 {'x': 2008, 'y': 33.3, 'series': 1},
 {'x': 2010, 'y': 34.7, 'series': 1},
 {'x': 2012, 'y': 35.0, 'series': 1}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1974, 'y': 5.5, 'series': 0},
 {'x': 1975, 'y': 5.3, 'series': 0},
 {'x': 1976, 'y': 5.2, 'series': 0},
 {'x': 1977, 'y': 5.0, 'series': 0},
 {'x': 1978, 'y': 4.9, 'series': 0},
 {'x': 1979, 'y': 5.0, 'series': 0},
 {'x': 1980, 'y': 5.2, 'series': 0},
 {'x': 1981, 'y': 4.7, 'series': 0},
 {'x': 1982, 'y': 4.6, 'series': 0},
 {'x': 1983, 'y': 4.5, 'series': 0},
 {'x': 1984, 'y': 4.8, 'series': 0},
 {'x': 1985, 'y': 5.1, 'series': 0},
 {'x': 1986, 'y': 5.8, 'series': 0},
 {'x': 1987, 'y': 5.9, 'series': 0},
 {'x': 1988, 'y': 6.2, 'series': 0},
 {'x': 1989, 'y': 6.3, 'series': 0},
 {'x': 1990, 'y': 6.2, 'series': 0},
 {'x': 1991, 'y': 6.3, 'series': 0},
 {'x': 1992, 'y': 6.3, 'series': 0},
 {'x': 1993, 'y': 6.6, 'series': 0},
 {'x': 1994, 'y': 6.8, 'series': 0},
 {'x': 1995, 'y': 7.3, 'series': 0},
 {'x': 1996, 'y': 7.5, 'series': 0},
 {'x': 1997, 'y': 7.6, 'series': 0},
 {'x': 1998, 'y': 7.9, 'series': 0},
 {'x': 1999, 'y': 7.7, 'series': 0},
 {'x': 2000, 'y': 8.2, 'series': 0},
 {'x': 2001, 'y': 8.7, 'series': 0},
 {'x': 2002, 'y': 8.3, 'series': 0},
 {'x': 2003, 'y': 8.3, 'series': 0},
 {'x': 2004, 'y': 8.2, 'series': 0},
 {'x': 2005, 'y': 8.2, 'series': 0},
 {'x': 2006, 'y': 8.3, 'series': 0},
 {'x': 2007, 'y': 8.2, 'series': 0},
 {'x': 2008, 'y': 7.9, 'series': 0},
 {'x': 2009, 'y': 7.6, 'series': 0},
 {'x': 2010, 'y': 8.0, 'series': 0},
 {'x': 2011, 'y': 8.2, 'series': 0},
 {'x': 2012, 'y': 8.1, 'series': 0},
 {'x': 2013, 'y': 7.9, 'series': 0},
 {'x': 2014, 'y': 8.0, 'series': 0},
 {'x': 2015, 'y': 7.8, 'series': 0},
 {'x': 2016, 'y': 8.9, 'series': 0},
 {'x': 2017, 'y': 9.2, 'series': 0},
 {'x': 2018, 'y': 9.1, 'series': 0},
 {'x': 2019, 'y': 8.9, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1974, 'y': 5.5, 'series': 1},
 {'x': 1975, 'y': 5.3, 'series': 1},
 {'x': 1976, 'y': 5.2, 'series': 1},
 {'x': 1977, 'y': 5.0, 'series': 1},
 {'x': 1978, 'y': 4.9, 'series': 1},
 {'x': 1979, 'y': 5.0, 'series': 1},
 {'x': 1980, 'y': 5.2, 'series': 1},
 {'x': 1981, 'y': 4.7, 'series': 1},
 {'x': 1982, 'y': 4.6, 'series': 1},
 {'x': 1983, 'y': 4.5, 'series': 1},
 {'x': 1984, 'y': 4.8, 'series': 1},
 {'x': 1985, 'y': 5.1, 'series': 1},
 {'x': 1986, 'y': 5.8, 'series': 1},
 {'x': 1987, 'y': 5.9, 'series': 1},
 {'x': 1988, 'y': 6.2, 'series': 1},
 {'x': 1989, 'y': 6.3, 'series': 1},
 {'x': 1990, 'y': 6.2, 'series': 1},
 {'x': 1991, 'y': 6.3, 'series': 1},
 {'x': 1992, 'y': 6.3, 'series': 1},
 {'x': 1993, 'y': 6.6, 'series': 1},
 {'x': 1994, 'y': 6.8, 'series': 1},
 {'x': 1995, 'y': 7.3, 'series': 1},
 {'x': 1996, 'y': 7.5, 'series': 1},
 {'x': 1997, 'y': 7.6, 'series': 1},
 {'x': 1998, 'y': 7.9, 'series': 1},
 {'x': 1999, 'y': 7.7, 'series': 1},
 {'x': 2000, 'y': 8.2, 'series': 1},
 {'x': 2001, 'y': 8.7, 'series': 1},
 {'x': 2002, 'y': 8.3, 'series': 1},
 {'x': 2003, 'y': 8.3, 'series': 1},
 {'x': 2004, 'y': 8.2, 'series': 1},
 {'x': 2005, 'y': 8.2, 'series': 1},
 {'x': 2006, 'y': 8.3, 'series': 1},
 {'x': 2007, 'y': 8.2, 'series': 1},
 {'x': 2008, 'y': 7.9, 'series': 1},
 {'x': 2009, 'y': 7.6, 'series': 1},
 {'x': 2010, 'y': 8.0, 'series': 1},
 {'x': 2011, 'y': 8.2, 'series': 1},
 {'x': 2012, 'y': 8.1, 'series': 1},
 {'x': 2013, 'y': 7.9, 'series': 1},
 {'x': 2014, 'y': 8.0, 'series': 1},
 {'x': 2015, 'y': 7.8, 'series': 1},
 {'x': 2016, 'y': 8.9, 'series': 1},
 {'x': 2017, 'y': 9.2, 'series': 1},
 {'x': 2018, 'y': 9.1, 'series': 1},
 {'x': 2019, 'y': 8.9, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1980, 'y': 4.1, 'series': 0},
 {'x': 1981, 'y': 3.7, 'series': 0},
 {'x': 1982, 'y': 3.6, 'series': 0},
 {'x': 1983, 'y': 3.6, 'series': 0},
 {'x': 1984, 'y': 3.7, 'series': 0},
 {'x': 1985, 'y': 4.0, 'series': 0},
 {'x': 1986, 'y': 4.5, 'series': 0},
 {'x': 1987, 'y': 4.7, 'series': 0},
 {'x': 1988, 'y': 4.7, 'series': 0},
 {'x': 1989, 'y': 5.1, 'series': 0},
 {'x': 1990, 'y': 4.7, 'series': 0},
 {'x': 1991, 'y': 4.8, 'series': 0},
 {'x': 1992, 'y': 4.9, 'series': 0},
 {'x': 1993, 'y': 4.7, 'series': 0},
 {'x': 1994, 'y': 4.7, 'series': 0},
 {'x': 1995, 'y': 6.1, 'series': 0},
 {'x': 1996, 'y': 5.9, 'series': 0},
 {'x': 1997, 'y': 5.0, 'series': 0},
 {'x': 1998, 'y': 6.5, 'series': 0},
 {'x': 1999, 'y': 6.0, 'series': 0},
 {'x': 2000, 'y': 6.0, 'series': 0},
 {'x': 2001, 'y': 6.3, 'series': 0},
 {'x': 2002, 'y': 6.0, 'series': 0},
 {'x': 2003, 'y': 6.2, 'series': 0},
 {'x': 2004, 'y': 5.9, 'series': 0},
 {'x': 2005, 'y': 5.9, 'series': 0},
 {'x': 2006, 'y': 5.9, 'series': 0},
 {'x': 2007, 'y': 5.7, 'series': 0},
 {'x': 2008, 'y': 5.6, 'series': 0},
 {'x': 2009, 'y': 5.5, 'series': 0},
 {'x': 2010, 'y': 5.8, 'series': 0},
 {'x': 2011, 'y': 5.9, 'series': 0},
 {'x': 2012, 'y': 6.0, 'series': 0},
 {'x': 2013, 'y': 5.8, 'series': 0},
 {'x': 2014, 'y': 6.0, 'series': 0},
 {'x': 2015, 'y': 5.7, 'series': 0},
 {'x': 2016, 'y': 6.6, 'series': 0},
 {'x': 2017, 'y': 7.0, 'series': 0},
 {'x': 2018, 'y': 7.0, 'series': 0},
 {'x': 2019, 'y': 6.8, 'series': 0}], yAxis: 1},
 {key: 'WID - Post-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1980, 'y': 4.1, 'series': 1},
 {'x': 1981, 'y': 3.7, 'series': 1},
 {'x': 1982, 'y': 3.6, 'series': 1},
 {'x': 1983, 'y': 3.6, 'series': 1},
 {'x': 1984, 'y': 3.7, 'series': 1},
 {'x': 1985, 'y': 4.0, 'series': 1},
 {'x': 1986, 'y': 4.5, 'series': 1},
 {'x': 1987, 'y': 4.7, 'series': 1},
 {'x': 1988, 'y': 4.7, 'series': 1},
 {'x': 1989, 'y': 5.1, 'series': 1},
 {'x': 1990, 'y': 4.7, 'series': 1},
 {'x': 1991, 'y': 4.8, 'series': 1},
 {'x': 1992, 'y': 4.9, 'series': 1},
 {'x': 1993, 'y': 4.7, 'series': 1},
 {'x': 1994, 'y': 4.7, 'series': 1},
 {'x': 1995, 'y': 6.1, 'series': 1},
 {'x': 1996, 'y': 5.9, 'series': 1},
 {'x': 1997, 'y': 5.0, 'series': 1},
 {'x': 1998, 'y': 6.5, 'series': 1},
 {'x': 1999, 'y': 6.0, 'series': 1},
 {'x': 2000, 'y': 6.0, 'series': 1},
 {'x': 2001, 'y': 6.3, 'series': 1},
 {'x': 2002, 'y': 6.0, 'series': 1},
 {'x': 2003, 'y': 6.2, 'series': 1},
 {'x': 2004, 'y': 5.9, 'series': 1},
 {'x': 2005, 'y': 5.9, 'series': 1},
 {'x': 2006, 'y': 5.9, 'series': 1},
 {'x': 2007, 'y': 5.7, 'series': 1},
 {'x': 2008, 'y': 5.6, 'series': 1},
 {'x': 2009, 'y': 5.5, 'series': 1},
 {'x': 2010, 'y': 5.8, 'series': 1},
 {'x': 2011, 'y': 5.9, 'series': 1},
 {'x': 2012, 'y': 6.0, 'series': 1},
 {'x': 2013, 'y': 5.8, 'series': 1},
 {'x': 2014, 'y': 6.0, 'series': 1},
 {'x': 2015, 'y': 5.7, 'series': 1},
 {'x': 2016, 'y': 6.6, 'series': 1},
 {'x': 2017, 'y': 7.0, 'series': 1},
 {'x': 2018, 'y': 7.0, 'series': 1},
 {'x': 2019, 'y': 6.8, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1974, 'y': 7.5, 'series': 0},
 {'x': 1975, 'y': 7.2, 'series': 0},
 {'x': 1976, 'y': 7.1, 'series': 0},
 {'x': 1977, 'y': 6.8, 'series': 0},
 {'x': 1978, 'y': 6.7, 'series': 0},
 {'x': 1979, 'y': 6.8, 'series': 0},
 {'x': 1980, 'y': 6.9, 'series': 0},
 {'x': 1981, 'y': 6.5, 'series': 0},
 {'x': 1982, 'y': 6.4, 'series': 0},
 {'x': 1983, 'y': 6.3, 'series': 0},
 {'x': 1984, 'y': 6.5, 'series': 0},
 {'x': 1985, 'y': 6.8, 'series': 0},
 {'x': 1986, 'y': 7.1, 'series': 0},
 {'x': 1987, 'y': 7.5, 'series': 0},
 {'x': 1988, 'y': 7.6, 'series': 0},
 {'x': 1989, 'y': 7.8, 'series': 0},
 {'x': 1990, 'y': 7.8, 'series': 0},
 {'x': 1991, 'y': 7.8, 'series': 0},
 {'x': 1992, 'y': 7.8, 'series': 0},
 {'x': 1993, 'y': 7.9, 'series': 0},
 {'x': 1994, 'y': 8.0, 'series': 0},
 {'x': 1995, 'y': 8.1, 'series': 0},
 {'x': 1998, 'y': 8.7, 'series': 0},
 {'x': 1999, 'y': 8.8, 'series': 0},
 {'x': 2000, 'y': 9.1, 'series': 0},
 {'x': 2001, 'y': 9.3, 'series': 0},
 {'x': 2002, 'y': 9.3, 'series': 0},
 {'x': 2003, 'y': 9.4, 'series': 0},
 {'x': 2004, 'y': 9.3, 'series': 0},
 {'x': 2005, 'y': 9.4, 'series': 0},
 {'x': 2006, 'y': 9.7, 'series': 0},
 {'x': 2007, 'y': 9.9, 'series': 0},
 {'x': 2008, 'y': 9.7, 'series': 0},
 {'x': 2009, 'y': 9.4, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (individuals, excluding capital gains)', type: 'scatter', values: [
{'x': 1974, 'y': 7.5, 'series': 1},
 {'x': 1975, 'y': 7.2, 'series': 1},
 {'x': 1976, 'y': 7.1, 'series': 1},
 {'x': 1977, 'y': 6.8, 'series': 1},
 {'x': 1978, 'y': 6.7, 'series': 1},
 {'x': 1979, 'y': 6.8, 'series': 1},
 {'x': 1980, 'y': 6.9, 'series': 1},
 {'x': 1981, 'y': 6.5, 'series': 1},
 {'x': 1982, 'y': 6.4, 'series': 1},
 {'x': 1983, 'y': 6.3, 'series': 1},
 {'x': 1984, 'y': 6.5, 'series': 1},
 {'x': 1985, 'y': 6.8, 'series': 1},
 {'x': 1986, 'y': 7.1, 'series': 1},
 {'x': 1987, 'y': 7.5, 'series': 1},
 {'x': 1988, 'y': 7.6, 'series': 1},
 {'x': 1989, 'y': 7.8, 'series': 1},
 {'x': 1990, 'y': 7.8, 'series': 1},
 {'x': 1991, 'y': 7.8, 'series': 1},
 {'x': 1992, 'y': 7.8, 'series': 1},
 {'x': 1993, 'y': 7.9, 'series': 1},
 {'x': 1994, 'y': 8.0, 'series': 1},
 {'x': 1995, 'y': 8.1, 'series': 1},
 {'x': 1998, 'y': 8.7, 'series': 1},
 {'x': 1999, 'y': 8.8, 'series': 1},
 {'x': 2000, 'y': 9.1, 'series': 1},
 {'x': 2001, 'y': 9.3, 'series': 1},
 {'x': 2002, 'y': 9.3, 'series': 1},
 {'x': 2003, 'y': 9.4, 'series': 1},
 {'x': 2004, 'y': 9.3, 'series': 1},
 {'x': 2005, 'y': 9.4, 'series': 1},
 {'x': 2006, 'y': 9.7, 'series': 1},
 {'x': 2007, 'y': 9.9, 'series': 1},
 {'x': 2008, 'y': 9.7, 'series': 1},
 {'x': 2009, 'y': 9.4, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1977, 'y': 17.3, 'series': 0},
 {'x': 1978, 'y': 17.7, 'series': 0},
 {'x': 1979, 'y': 18.0, 'series': 0},
 {'x': 1980, 'y': 16.4, 'series': 0},
 {'x': 1981, 'y': 15.4, 'series': 0},
 {'x': 1982, 'y': 14.7, 'series': 0},
 {'x': 1983, 'y': 15.7, 'series': 0},
 {'x': 1984, 'y': 15.9, 'series': 0},
 {'x': 1986, 'y': 16.5, 'series': 0},
 {'x': 1987, 'y': 18.5, 'series': 0},
 {'x': 1989, 'y': 15.2, 'series': 0},
 {'x': 1991, 'y': 16.4, 'series': 0},
 {'x': 1993, 'y': 20.1, 'series': 0},
 {'x': 1995, 'y': 20.4, 'series': 0},
 {'x': 1998, 'y': 20.5, 'series': 0},
 {'x': 2000, 'y': 19.6, 'series': 0},
 {'x': 2002, 'y': 19.7, 'series': 0},
 {'x': 2004, 'y': 20.5, 'series': 0},
 {'x': 2006, 'y': 19.6, 'series': 0},
 {'x': 2008, 'y': 20.7, 'series': 0},
 {'x': 2010, 'y': 21.5, 'series': 0},
 {'x': 2012, 'y': 20.7, 'series': 0},
 {'x': 2014, 'y': 22.2, 'series': 0},
 {'x': 2016, 'y': 22.8, 'series': 0}], yAxis: 1},
 {key: 'Bank of Italy - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1977, 'y': 17.3, 'series': 1},
 {'x': 1978, 'y': 17.7, 'series': 1},
 {'x': 1979, 'y': 18.0, 'series': 1},
 {'x': 1980, 'y': 16.4, 'series': 1},
 {'x': 1981, 'y': 15.4, 'series': 1},
 {'x': 1982, 'y': 14.7, 'series': 1},
 {'x': 1983, 'y': 15.7, 'series': 1},
 {'x': 1984, 'y': 15.9, 'series': 1},
 {'x': 1986, 'y': 16.5, 'series': 1},
 {'x': 1987, 'y': 18.5, 'series': 1},
 {'x': 1989, 'y': 15.2, 'series': 1},
 {'x': 1991, 'y': 16.4, 'series': 1},
 {'x': 1993, 'y': 20.1, 'series': 1},
 {'x': 1995, 'y': 20.4, 'series': 1},
 {'x': 1998, 'y': 20.5, 'series': 1},
 {'x': 2000, 'y': 19.6, 'series': 1},
 {'x': 2002, 'y': 19.7, 'series': 1},
 {'x': 2004, 'y': 20.5, 'series': 1},
 {'x': 2006, 'y': 19.6, 'series': 1},
 {'x': 2008, 'y': 20.7, 'series': 1},
 {'x': 2010, 'y': 21.5, 'series': 1},
 {'x': 2012, 'y': 20.7, 'series': 1},
 {'x': 2014, 'y': 22.2, 'series': 1},
 {'x': 2016, 'y': 22.8, 'series': 1}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1973, 'y': 176.5, 'series': 0},
 {'x': 1975, 'y': 168.0, 'series': 0},
 {'x': 1977, 'y': 153.8, 'series': 0},
 {'x': 1978, 'y': 155.6, 'series': 0},
 {'x': 1979, 'y': 150.0, 'series': 0},
 {'x': 1980, 'y': 146.2, 'series': 0},
 {'x': 1981, 'y': 142.5, 'series': 0},
 {'x': 1982, 'y': 154.4, 'series': 0},
 {'x': 1983, 'y': 149.3, 'series': 0},
 {'x': 1984, 'y': 150.0, 'series': 0},
 {'x': 1986, 'y': 142.9, 'series': 0},
 {'x': 1987, 'y': 156.0, 'series': 0},
 {'x': 1989, 'y': 144.4, 'series': 0},
 {'x': 1991, 'y': 152.6, 'series': 0},
 {'x': 1993, 'y': 157.1, 'series': 0},
 {'x': 1995, 'y': 163.6, 'series': 0},
 {'x': 1998, 'y': 154.2, 'series': 0},
 {'x': 2000, 'y': 160.0, 'series': 0},
 {'x': 2002, 'y': 164.2, 'series': 0},
 {'x': 2004, 'y': 165.5, 'series': 0},
 {'x': 2006, 'y': 166.7, 'series': 0},
 {'x': 2008, 'y': 159.2, 'series': 0},
 {'x': 2010, 'y': 155.1, 'series': 0},
 {'x': 2012, 'y': 159.0, 'series': 0}], yAxis: 1},
 {key: "Atkinson (2008) 'Bank of Italy' - Gross individual earnings", type: 'scatter', values: [
{'x': 1973, 'y': 176.5, 'series': 1},
 {'x': 1975, 'y': 168.0, 'series': 1},
 {'x': 1977, 'y': 153.8, 'series': 1},
 {'x': 1978, 'y': 155.6, 'series': 1},
 {'x': 1979, 'y': 150.0, 'series': 1},
 {'x': 1980, 'y': 146.2, 'series': 1},
 {'x': 1981, 'y': 142.5, 'series': 1},
 {'x': 1982, 'y': 154.4, 'series': 1},
 {'x': 1983, 'y': 149.3, 'series': 1},
 {'x': 1984, 'y': 150.0, 'series': 1},
 {'x': 1986, 'y': 142.9, 'series': 1},
 {'x': 1987, 'y': 156.0, 'series': 1},
 {'x': 1989, 'y': 144.4, 'series': 1},
 {'x': 1991, 'y': 152.6, 'series': 1},
 {'x': 1993, 'y': 157.1, 'series': 1},
 {'x': 1995, 'y': 163.6, 'series': 1},
 {'x': 1998, 'y': 154.2, 'series': 1},
 {'x': 2000, 'y': 160.0, 'series': 1},
 {'x': 2002, 'y': 164.2, 'series': 1},
 {'x': 2004, 'y': 165.5, 'series': 1},
 {'x': 2006, 'y': 166.7, 'series': 1},
 {'x': 2008, 'y': 159.2, 'series': 1},
 {'x': 2010, 'y': 155.1, 'series': 1},
 {'x': 2012, 'y': 159.0, 'series': 1}], yAxis: 1}]; 
$scope.data6 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1989, 'y': 11.0, 'series': 0},
 {'x': 1991, 'y': 9.7, 'series': 0},
 {'x': 1993, 'y': 12.6, 'series': 0},
 {'x': 1995, 'y': 11.0, 'series': 0},
 {'x': 1998, 'y': 14.6, 'series': 0},
 {'x': 2000, 'y': 14.5, 'series': 0},
 {'x': 2002, 'y': 12.6, 'series': 0},
 {'x': 2004, 'y': 12.2, 'series': 0},
 {'x': 2006, 'y': 15.2, 'series': 0},
 {'x': 2008, 'y': 12.9, 'series': 0},
 {'x': 2010, 'y': 14.4, 'series': 0},
 {'x': 2012, 'y': 15.7, 'series': 0}], yAxis: 1},
 {key: 'Brandolini et al (2004) - Equivalised net wealth', type: 'scatter', values: [
{'x': 1989, 'y': 11.0, 'series': 1},
 {'x': 1991, 'y': 9.7, 'series': 1},
 {'x': 1993, 'y': 12.6, 'series': 1},
 {'x': 1995, 'y': 11.0, 'series': 1},
 {'x': 1998, 'y': 14.6, 'series': 1},
 {'x': 2000, 'y': 14.5, 'series': 1},
 {'x': 2002, 'y': 12.6, 'series': 1},
 {'x': 2004, 'y': 12.2, 'series': 1},
 {'x': 2006, 'y': 15.2, 'series': 1},
 {'x': 2008, 'y': 12.9, 'series': 1},
 {'x': 2010, 'y': 14.4, 'series': 1},
 {'x': 2012, 'y': 15.7, 'series': 1}], yAxis: 1}]; 
$scope.data7 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1968, 'y': 61.5, 'series': 0},
 {'x': 1969, 'y': 62.1, 'series': 0},
 {'x': 1970, 'y': 56.8, 'series': 0},
 {'x': 1971, 'y': 59.3, 'series': 0},
 {'x': 1972, 'y': 59.7, 'series': 0},
 {'x': 1973, 'y': 62.1, 'series': 0},
 {'x': 1974, 'y': 59.2, 'series': 0},
 {'x': 1975, 'y': 56.8, 'series': 0},
 {'x': 1987, 'y': 46.4, 'series': 0},
 {'x': 1989, 'y': 41.0, 'series': 0},
 {'x': 1991, 'y': 41.9, 'series': 0},
 {'x': 1993, 'y': 44.5, 'series': 0},
 {'x': 1995, 'y': 43.9, 'series': 0},
 {'x': 1998, 'y': 47.9, 'series': 0},
 {'x': 2000, 'y': 48.7, 'series': 0},
 {'x': 2002, 'y': 45.7, 'series': 0},
 {'x': 2004, 'y': 44.5, 'series': 0},
 {'x': 2006, 'y': 46.5, 'series': 0},
 {'x': 2008, 'y': 46.2, 'series': 0},
 {'x': 2010, 'y': 47.9, 'series': 0},
 {'x': 2012, 'y': 48.5, 'series': 0},
 {'x': 2014, 'y': 46.0, 'series': 0},
 {'x': 2016, 'y': 46.5, 'series': 0}], yAxis: 1},
 {key: "Cannari & D'Alessio (2018) - Equivalised net wealth (estimates on synthetic data)", type: 'scatter', values: [
{'x': 1968, 'y': 61.5, 'series': 1},
 {'x': 1969, 'y': 62.1, 'series': 1},
 {'x': 1970, 'y': 56.8, 'series': 1},
 {'x': 1971, 'y': 59.3, 'series': 1},
 {'x': 1972, 'y': 59.7, 'series': 1},
 {'x': 1973, 'y': 62.1, 'series': 1},
 {'x': 1974, 'y': 59.2, 'series': 1},
 {'x': 1975, 'y': 56.8, 'series': 1},
 {'x': 2016, 'y': null, 'series': 1}], yAxis: 1},
 {key: "Cannari & D'Alessio (2018) - Equivalised net wealth (Historical Archive data)", type: 'scatter', values: [
{'x': 1968, 'y': null, 'series': 2},
 {'x': 1987, 'y': 46.4, 'series': 2},
 {'x': 1989, 'y': 41.0, 'series': 2},
 {'x': 1991, 'y': 41.9, 'series': 2},
 {'x': 1993, 'y': 44.5, 'series': 2},
 {'x': 1995, 'y': 43.9, 'series': 2},
 {'x': 1998, 'y': 47.9, 'series': 2},
 {'x': 2000, 'y': 48.7, 'series': 2},
 {'x': 2002, 'y': 45.7, 'series': 2},
 {'x': 2004, 'y': 44.5, 'series': 2},
 {'x': 2006, 'y': 46.5, 'series': 2},
 {'x': 2008, 'y': 46.2, 'series': 2},
 {'x': 2010, 'y': 47.9, 'series': 2},
 {'x': 2012, 'y': 48.5, 'series': 2},
 {'x': 2014, 'y': 46.0, 'series': 2},
 {'x': 2016, 'y': 46.5, 'series': 2}], yAxis: 1}]
});