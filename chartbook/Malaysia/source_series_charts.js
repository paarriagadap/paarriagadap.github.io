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
{'x': 1957, 'y': 45.6, 'series': 0},
 {'x': 1967, 'y': 50.5, 'series': 0},
 {'x': 1970, 'y': 51.3, 'series': 0},
 {'x': 1974, 'y': 53.0, 'series': 0},
 {'x': 1976, 'y': 55.7, 'series': 0},
 {'x': 1979, 'y': 50.5, 'series': 0},
 {'x': 1984, 'y': 48.3, 'series': 0},
 {'x': 1987, 'y': 45.6, 'series': 0},
 {'x': 1989, 'y': 44.2, 'series': 0},
 {'x': 1992, 'y': 45.1, 'series': 0},
 {'x': 1995, 'y': 45.6, 'series': 0},
 {'x': 1997, 'y': 45.9, 'series': 0},
 {'x': 1999, 'y': 44.3, 'series': 0},
 {'x': 2002, 'y': 46.1, 'series': 0},
 {'x': 2004, 'y': 46.2, 'series': 0},
 {'x': 2007, 'y': 44.1, 'series': 0},
 {'x': 2009, 'y': 44.1, 'series': 0},
 {'x': 2012, 'y': 43.1, 'series': 0},
 {'x': 2014, 'y': 40.1, 'series': 0},
 {'x': 2016, 'y': 39.9, 'series': 0},
 {'x': 2019, 'y': 40.7, 'series': 0}], yAxis: 1},
 {key: 'Ikemoto (1985) - Househould income', type: 'scatter', values: [
{'x': 1957, 'y': 44.9, 'series': 1},
 {'x': 1970, 'y': 50.5, 'series': 1},
 {'x': 1979, 'y': 49.3, 'series': 1},
 {'x': 2019, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'Krongkaew & Ragayah (2006) - Househould income', type: 'scatter', values: [
{'x': 1957, 'y': null, 'series': 2},
 {'x': 1967, 'y': 49.8, 'series': 2},
 {'x': 1970, 'y': 50.6, 'series': 2},
 {'x': 1979, 'y': 49.3, 'series': 2},
 {'x': 1981, 'y': 44.3, 'series': 2},
 {'x': 1982, 'y': 46.5, 'series': 2},
 {'x': 1984, 'y': 47.4, 'series': 2},
 {'x': 1993, 'y': 45.9, 'series': 2},
 {'x': 1995, 'y': 46.4, 'series': 2},
 {'x': 1997, 'y': 47.0, 'series': 2},
 {'x': 1999, 'y': 45.2, 'series': 2},
 {'x': 2002, 'y': 46.1, 'series': 2},
 {'x': 2004, 'y': 46.2, 'series': 2},
 {'x': 2019, 'y': null, 'series': 2}], yAxis: 1},
 {key: 'HI & BAS (2019) - Household income', type: 'scatter', values: [
{'x': 1957, 'y': null, 'series': 3},
 {'x': 1970, 'y': 51.3, 'series': 3},
 {'x': 1974, 'y': 53.0, 'series': 3},
 {'x': 1976, 'y': 55.7, 'series': 3},
 {'x': 1979, 'y': 50.5, 'series': 3},
 {'x': 1984, 'y': 48.3, 'series': 3},
 {'x': 1987, 'y': 45.6, 'series': 3},
 {'x': 1989, 'y': 44.2, 'series': 3},
 {'x': 1992, 'y': 45.1, 'series': 3},
 {'x': 1995, 'y': 45.6, 'series': 3},
 {'x': 1997, 'y': 45.9, 'series': 3},
 {'x': 1999, 'y': 44.3, 'series': 3},
 {'x': 2002, 'y': 46.1, 'series': 3},
 {'x': 2004, 'y': 46.2, 'series': 3},
 {'x': 2007, 'y': 44.1, 'series': 3},
 {'x': 2009, 'y': 44.1, 'series': 3},
 {'x': 2012, 'y': 43.1, 'series': 3},
 {'x': 2014, 'y': 40.1, 'series': 3},
 {'x': 2016, 'y': 39.9, 'series': 3},
 {'x': 2019, 'y': 40.7, 'series': 3}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1980, 'y': 18.8, 'series': 0},
 {'x': 1981, 'y': 18.8, 'series': 0},
 {'x': 1982, 'y': 18.8, 'series': 0},
 {'x': 1983, 'y': 18.8, 'series': 0},
 {'x': 1984, 'y': 18.8, 'series': 0},
 {'x': 1985, 'y': 18.8, 'series': 0},
 {'x': 1986, 'y': 18.8, 'series': 0},
 {'x': 1987, 'y': 18.8, 'series': 0},
 {'x': 1988, 'y': 18.8, 'series': 0},
 {'x': 1989, 'y': 18.8, 'series': 0},
 {'x': 1990, 'y': 18.8, 'series': 0},
 {'x': 1991, 'y': 18.8, 'series': 0},
 {'x': 1992, 'y': 18.8, 'series': 0},
 {'x': 1993, 'y': 18.8, 'series': 0},
 {'x': 1994, 'y': 18.8, 'series': 0},
 {'x': 1995, 'y': 18.8, 'series': 0},
 {'x': 1996, 'y': 18.8, 'series': 0},
 {'x': 1997, 'y': 18.8, 'series': 0},
 {'x': 1998, 'y': 18.8, 'series': 0},
 {'x': 1999, 'y': 18.8, 'series': 0},
 {'x': 2000, 'y': 18.8, 'series': 0},
 {'x': 2001, 'y': 18.8, 'series': 0},
 {'x': 2002, 'y': 18.8, 'series': 0},
 {'x': 2003, 'y': 17.9, 'series': 0},
 {'x': 2004, 'y': 16.9, 'series': 0},
 {'x': 2005, 'y': 17.3, 'series': 0},
 {'x': 2006, 'y': 17.7, 'series': 0},
 {'x': 2007, 'y': 18.1, 'series': 0},
 {'x': 2008, 'y': 18.1, 'series': 0},
 {'x': 2009, 'y': 18.1, 'series': 0},
 {'x': 2010, 'y': 17.5, 'series': 0},
 {'x': 2011, 'y': 17.0, 'series': 0},
 {'x': 2012, 'y': 16.5, 'series': 0},
 {'x': 2013, 'y': 15.7, 'series': 0},
 {'x': 2014, 'y': 14.9, 'series': 0},
 {'x': 2015, 'y': 14.9, 'series': 0},
 {'x': 2016, 'y': 14.9, 'series': 0},
 {'x': 2017, 'y': 14.9, 'series': 0},
 {'x': 2018, 'y': 14.9, 'series': 0},
 {'x': 2019, 'y': 14.9, 'series': 0},
 {'x': 2020, 'y': 14.9, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
{'x': 1980, 'y': 18.8, 'series': 1},
 {'x': 1981, 'y': 18.8, 'series': 1},
 {'x': 1982, 'y': 18.8, 'series': 1},
 {'x': 1983, 'y': 18.8, 'series': 1},
 {'x': 1984, 'y': 18.8, 'series': 1},
 {'x': 1985, 'y': 18.8, 'series': 1},
 {'x': 1986, 'y': 18.8, 'series': 1},
 {'x': 1987, 'y': 18.8, 'series': 1},
 {'x': 1988, 'y': 18.8, 'series': 1},
 {'x': 1989, 'y': 18.8, 'series': 1},
 {'x': 1990, 'y': 18.8, 'series': 1},
 {'x': 1991, 'y': 18.8, 'series': 1},
 {'x': 1992, 'y': 18.8, 'series': 1},
 {'x': 1993, 'y': 18.8, 'series': 1},
 {'x': 1994, 'y': 18.8, 'series': 1},
 {'x': 1995, 'y': 18.8, 'series': 1},
 {'x': 1996, 'y': 18.8, 'series': 1},
 {'x': 1997, 'y': 18.8, 'series': 1},
 {'x': 1998, 'y': 18.8, 'series': 1},
 {'x': 1999, 'y': 18.8, 'series': 1},
 {'x': 2000, 'y': 18.8, 'series': 1},
 {'x': 2001, 'y': 18.8, 'series': 1},
 {'x': 2002, 'y': 18.8, 'series': 1},
 {'x': 2003, 'y': 17.9, 'series': 1},
 {'x': 2004, 'y': 16.9, 'series': 1},
 {'x': 2005, 'y': 17.3, 'series': 1},
 {'x': 2006, 'y': 17.7, 'series': 1},
 {'x': 2007, 'y': 18.1, 'series': 1},
 {'x': 2008, 'y': 18.1, 'series': 1},
 {'x': 2009, 'y': 18.1, 'series': 1},
 {'x': 2010, 'y': 17.5, 'series': 1},
 {'x': 2011, 'y': 17.0, 'series': 1},
 {'x': 2012, 'y': 16.5, 'series': 1},
 {'x': 2013, 'y': 15.7, 'series': 1},
 {'x': 2014, 'y': 14.9, 'series': 1},
 {'x': 2015, 'y': 14.9, 'series': 1},
 {'x': 2016, 'y': 14.9, 'series': 1},
 {'x': 2017, 'y': 14.9, 'series': 1},
 {'x': 2018, 'y': 14.9, 'series': 1},
 {'x': 2019, 'y': 14.9, 'series': 1},
 {'x': 2020, 'y': 14.9, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1951, 'y': 8.8, 'series': 0},
 {'x': 1955, 'y': 10.1, 'series': 0},
 {'x': 1956, 'y': 10.5, 'series': 0},
 {'x': 1957, 'y': 10.3, 'series': 0},
 {'x': 1958, 'y': 10.7, 'series': 0},
 {'x': 1959, 'y': 10.6, 'series': 0},
 {'x': 1960, 'y': 10.8, 'series': 0},
 {'x': 1961, 'y': 11.9, 'series': 0},
 {'x': 1962, 'y': 11.1, 'series': 0},
 {'x': 1963, 'y': 11.6, 'series': 0},
 {'x': 1964, 'y': 12.0, 'series': 0},
 {'x': 1965, 'y': 13.0, 'series': 0},
 {'x': 1966, 'y': 10.9, 'series': 0},
 {'x': 1967, 'y': 10.7, 'series': 0},
 {'x': 1968, 'y': 11.7, 'series': 0},
 {'x': 1969, 'y': 11.3, 'series': 0},
 {'x': 1970, 'y': 14.8, 'series': 0},
 {'x': 1971, 'y': 15.1, 'series': 0},
 {'x': 1972, 'y': 18.5, 'series': 0},
 {'x': 1973, 'y': 17.5, 'series': 0},
 {'x': 1974, 'y': 15.3, 'series': 0},
 {'x': 1975, 'y': 16.0, 'series': 0},
 {'x': 1983, 'y': 12.3, 'series': 0},
 {'x': 1984, 'y': 11.6, 'series': 0},
 {'x': 1989, 'y': 10.8, 'series': 0},
 {'x': 1997, 'y': 12.4, 'series': 0},
 {'x': 2002, 'y': 12.4, 'series': 0},
 {'x': 2004, 'y': 11.9, 'series': 0},
 {'x': 2007, 'y': 16.0, 'series': 0},
 {'x': 2009, 'y': 13.9, 'series': 0},
 {'x': 2012, 'y': 13.6, 'series': 0},
 {'x': 2014, 'y': 13.5, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (equal-split adults)', type: 'scatter', values: [
{'x': 1951, 'y': 8.8, 'series': 1},
 {'x': 1955, 'y': 10.1, 'series': 1},
 {'x': 1956, 'y': 10.5, 'series': 1},
 {'x': 1957, 'y': 10.3, 'series': 1},
 {'x': 1958, 'y': 10.7, 'series': 1},
 {'x': 1959, 'y': 10.6, 'series': 1},
 {'x': 1960, 'y': 10.8, 'series': 1},
 {'x': 1961, 'y': 11.9, 'series': 1},
 {'x': 1962, 'y': 11.1, 'series': 1},
 {'x': 1963, 'y': 11.6, 'series': 1},
 {'x': 1964, 'y': 12.0, 'series': 1},
 {'x': 1965, 'y': 13.0, 'series': 1},
 {'x': 1966, 'y': 10.9, 'series': 1},
 {'x': 1967, 'y': 10.7, 'series': 1},
 {'x': 1968, 'y': 11.7, 'series': 1},
 {'x': 1969, 'y': 11.3, 'series': 1},
 {'x': 1970, 'y': 14.8, 'series': 1},
 {'x': 1971, 'y': 15.1, 'series': 1},
 {'x': 1972, 'y': 18.5, 'series': 1},
 {'x': 1973, 'y': 17.5, 'series': 1},
 {'x': 1974, 'y': 15.3, 'series': 1},
 {'x': 1975, 'y': 16.0, 'series': 1},
 {'x': 1983, 'y': 12.3, 'series': 1},
 {'x': 1984, 'y': 11.6, 'series': 1},
 {'x': 1989, 'y': 10.8, 'series': 1},
 {'x': 1997, 'y': 12.4, 'series': 1},
 {'x': 2002, 'y': 12.4, 'series': 1},
 {'x': 2004, 'y': 11.9, 'series': 1},
 {'x': 2007, 'y': 16.0, 'series': 1},
 {'x': 2009, 'y': 13.9, 'series': 1},
 {'x': 2012, 'y': 13.6, 'series': 1},
 {'x': 2014, 'y': 13.5, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1970, 'y': 11.5, 'series': 0},
 {'x': 1974, 'y': 11.4, 'series': 0},
 {'x': 1976, 'y': 10.8, 'series': 0},
 {'x': 1979, 'y': 11.9, 'series': 0},
 {'x': 1984, 'y': 12.7, 'series': 0},
 {'x': 1987, 'y': 13.7, 'series': 0},
 {'x': 1990, 'y': 14.5, 'series': 0},
 {'x': 1992, 'y': 13.9, 'series': 0},
 {'x': 1995, 'y': 13.7, 'series': 0},
 {'x': 1997, 'y': 13.2, 'series': 0},
 {'x': 1999, 'y': 14.0, 'series': 0},
 {'x': 2002, 'y': 13.5, 'series': 0},
 {'x': 2004, 'y': 13.2, 'series': 0},
 {'x': 2007, 'y': 14.6, 'series': 0},
 {'x': 2009, 'y': 14.3, 'series': 0},
 {'x': 2012, 'y': 14.8, 'series': 0},
 {'x': 2014, 'y': 16.8, 'series': 0},
 {'x': 2019, 'y': 16.0, 'series': 0}], yAxis: 1},
 {key: 'HI & BAS (2014-19) - Gross household income', type: 'scatter', values: [
{'x': 1970, 'y': 11.5, 'series': 1},
 {'x': 1974, 'y': 11.4, 'series': 1},
 {'x': 1976, 'y': 10.8, 'series': 1},
 {'x': 1979, 'y': 11.9, 'series': 1},
 {'x': 1984, 'y': 12.7, 'series': 1},
 {'x': 1987, 'y': 13.7, 'series': 1},
 {'x': 1990, 'y': 14.5, 'series': 1},
 {'x': 1992, 'y': 13.9, 'series': 1},
 {'x': 1995, 'y': 13.7, 'series': 1},
 {'x': 1997, 'y': 13.2, 'series': 1},
 {'x': 1999, 'y': 14.0, 'series': 1},
 {'x': 2002, 'y': 13.5, 'series': 1},
 {'x': 2004, 'y': 13.2, 'series': 1},
 {'x': 2007, 'y': 14.6, 'series': 1},
 {'x': 2009, 'y': 14.3, 'series': 1},
 {'x': 2012, 'y': 14.8, 'series': 1},
 {'x': 2014, 'y': 16.8, 'series': 1},
 {'x': 2019, 'y': 16.0, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1970, 'y': 49.3, 'series': 0},
 {'x': 1976, 'y': 37.7, 'series': 0},
 {'x': 1979, 'y': 37.4, 'series': 0},
 {'x': 1984, 'y': 20.7, 'series': 0},
 {'x': 1987, 'y': 19.4, 'series': 0},
 {'x': 1989, 'y': 16.5, 'series': 0},
 {'x': 1992, 'y': 12.4, 'series': 0},
 {'x': 1995, 'y': 8.7, 'series': 0},
 {'x': 1997, 'y': 6.1, 'series': 0},
 {'x': 1999, 'y': 7.5, 'series': 0},
 {'x': 2002, 'y': 5.1, 'series': 0},
 {'x': 2004, 'y': 5.7, 'series': 0},
 {'x': 2007, 'y': 3.6, 'series': 0},
 {'x': 2009, 'y': 3.8, 'series': 0},
 {'x': 2012, 'y': 1.7, 'series': 0},
 {'x': 2014, 'y': 0.6, 'series': 0},
 {'x': 2016, 'y': 0.4, 'series': 0},
 {'x': 2019, 'y': 0.2, 'series': 0}], yAxis: 1},
 {key: 'HI & BAS (2019) - Household income', type: 'scatter', values: [
{'x': 1970, 'y': 49.3, 'series': 1},
 {'x': 1976, 'y': 37.7, 'series': 1},
 {'x': 1979, 'y': 37.4, 'series': 1},
 {'x': 1984, 'y': 20.7, 'series': 1},
 {'x': 1987, 'y': 19.4, 'series': 1},
 {'x': 1989, 'y': 16.5, 'series': 1},
 {'x': 1992, 'y': 12.4, 'series': 1},
 {'x': 1995, 'y': 8.7, 'series': 1},
 {'x': 1997, 'y': 6.1, 'series': 1},
 {'x': 1999, 'y': 7.5, 'series': 1},
 {'x': 2002, 'y': 5.1, 'series': 1},
 {'x': 2004, 'y': 5.7, 'series': 1},
 {'x': 2007, 'y': 3.6, 'series': 1},
 {'x': 2009, 'y': 3.8, 'series': 1},
 {'x': 2012, 'y': 1.7, 'series': 1},
 {'x': 2014, 'y': 0.6, 'series': 1},
 {'x': 2016, 'y': 0.4, 'series': 1},
 {'x': 2019, 'y': 0.2, 'series': 1}], yAxis: 1}]
});