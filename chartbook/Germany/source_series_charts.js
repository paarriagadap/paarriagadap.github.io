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
{'x': 1962, 'y': 28.8, 'series': 0},
 {'x': 1969, 'y': 25.5, 'series': 0},
 {'x': 1973, 'y': 24.5, 'series': 0},
 {'x': 1978, 'y': 24.4, 'series': 0},
 {'x': 1983, 'y': 24.7, 'series': 0},
 {'x': 1984, 'y': 25.2, 'series': 0},
 {'x': 1985, 'y': 24.0, 'series': 0},
 {'x': 1986, 'y': 23.9, 'series': 0},
 {'x': 1987, 'y': 23.6, 'series': 0},
 {'x': 1988, 'y': 24.2, 'series': 0},
 {'x': 1989, 'y': 24.5, 'series': 0},
 {'x': 1990, 'y': 24.8, 'series': 0},
 {'x': 1991, 'y': 24.8, 'series': 0},
 {'x': 1992, 'y': 25.2, 'series': 0},
 {'x': 1993, 'y': 25.3, 'series': 0},
 {'x': 1994, 'y': 26.0, 'series': 0},
 {'x': 1995, 'y': 25.5, 'series': 0},
 {'x': 1996, 'y': 25.0, 'series': 0},
 {'x': 1997, 'y': 25.0, 'series': 0},
 {'x': 1998, 'y': 25.0, 'series': 0},
 {'x': 1999, 'y': 24.9, 'series': 0},
 {'x': 2000, 'y': 25.5, 'series': 0},
 {'x': 2001, 'y': 25.7, 'series': 0},
 {'x': 2002, 'y': 26.8, 'series': 0},
 {'x': 2003, 'y': 26.9, 'series': 0},
 {'x': 2004, 'y': 27.4, 'series': 0},
 {'x': 2005, 'y': 28.8, 'series': 0},
 {'x': 2006, 'y': 28.5, 'series': 0},
 {'x': 2007, 'y': 28.6, 'series': 0},
 {'x': 2008, 'y': 28.3, 'series': 0},
 {'x': 2009, 'y': 28.3, 'series': 0},
 {'x': 2010, 'y': 28.0, 'series': 0},
 {'x': 2011, 'y': 28.6, 'series': 0},
 {'x': 2012, 'y': 28.8, 'series': 0}], yAxis: 1},
 {key: 'Becker (1997) - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1962, 'y': 29.2, 'series': 1},
 {'x': 1969, 'y': 25.8, 'series': 1},
 {'x': 1973, 'y': 24.8, 'series': 1},
 {'x': 1978, 'y': 24.7, 'series': 1},
 {'x': 1983, 'y': 25.0, 'series': 1},
 {'x': 2012, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'SOEP - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1962, 'y': null, 'series': 2},
 {'x': 1983, 'y': 24.7, 'series': 2},
 {'x': 1984, 'y': 25.2, 'series': 2},
 {'x': 1985, 'y': 24.0, 'series': 2},
 {'x': 1986, 'y': 23.9, 'series': 2},
 {'x': 1987, 'y': 23.6, 'series': 2},
 {'x': 1988, 'y': 24.2, 'series': 2},
 {'x': 1989, 'y': 24.5, 'series': 2},
 {'x': 1990, 'y': 24.8, 'series': 2},
 {'x': 1991, 'y': 24.8, 'series': 2},
 {'x': 1992, 'y': 25.2, 'series': 2},
 {'x': 1993, 'y': 25.3, 'series': 2},
 {'x': 1994, 'y': 26.0, 'series': 2},
 {'x': 1995, 'y': 25.5, 'series': 2},
 {'x': 1996, 'y': 25.0, 'series': 2},
 {'x': 1997, 'y': 25.0, 'series': 2},
 {'x': 1998, 'y': 25.0, 'series': 2},
 {'x': 1999, 'y': 24.9, 'series': 2},
 {'x': 2000, 'y': 25.5, 'series': 2},
 {'x': 2001, 'y': 25.7, 'series': 2},
 {'x': 2002, 'y': 26.8, 'series': 2},
 {'x': 2003, 'y': 26.9, 'series': 2},
 {'x': 2004, 'y': 27.4, 'series': 2},
 {'x': 2005, 'y': 28.8, 'series': 2},
 {'x': 2006, 'y': 28.5, 'series': 2},
 {'x': 2007, 'y': 28.6, 'series': 2},
 {'x': 2008, 'y': 28.3, 'series': 2},
 {'x': 2009, 'y': 28.3, 'series': 2},
 {'x': 2010, 'y': 28.0, 'series': 2},
 {'x': 2011, 'y': 28.6, 'series': 2},
 {'x': 2012, 'y': 28.8, 'series': 2}], yAxis: 1}]; 
$scope.data1 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1900, 'y': 17.2, 'series': 0},
 {'x': 1901, 'y': 16.9, 'series': 0},
 {'x': 1902, 'y': 16.5, 'series': 0},
 {'x': 1903, 'y': 16.4, 'series': 0},
 {'x': 1904, 'y': 16.5, 'series': 0},
 {'x': 1905, 'y': 16.8, 'series': 0},
 {'x': 1906, 'y': 16.8, 'series': 0},
 {'x': 1907, 'y': 16.6, 'series': 0},
 {'x': 1908, 'y': 16.2, 'series': 0},
 {'x': 1909, 'y': 16.0, 'series': 0},
 {'x': 1910, 'y': 16.1, 'series': 0},
 {'x': 1911, 'y': 16.0, 'series': 0},
 {'x': 1912, 'y': 16.1, 'series': 0},
 {'x': 1913, 'y': 16.7, 'series': 0},
 {'x': 1914, 'y': 17.0, 'series': 0},
 {'x': 1915, 'y': 18.7, 'series': 0},
 {'x': 1916, 'y': 20.2, 'series': 0},
 {'x': 1917, 'y': 21.3, 'series': 0},
 {'x': 1918, 'y': 18.6, 'series': 0},
 {'x': 1925, 'y': 10.2, 'series': 0},
 {'x': 1926, 'y': 10.2, 'series': 0},
 {'x': 1927, 'y': 10.4, 'series': 0},
 {'x': 1928, 'y': 10.1, 'series': 0},
 {'x': 1929, 'y': 10.1, 'series': 0},
 {'x': 1932, 'y': 10.2, 'series': 0},
 {'x': 1933, 'y': 9.9, 'series': 0},
 {'x': 1934, 'y': 10.1, 'series': 0},
 {'x': 1935, 'y': 11.0, 'series': 0},
 {'x': 1936, 'y': 12.4, 'series': 0},
 {'x': 1937, 'y': 13.6, 'series': 0},
 {'x': 1938, 'y': 14.5, 'series': 0},
 {'x': 1949, 'y': 8.7, 'series': 0},
 {'x': 1950, 'y': 9.2, 'series': 0},
 {'x': 1954, 'y': 8.7, 'series': 0},
 {'x': 1957, 'y': 10.1, 'series': 0},
 {'x': 1961, 'y': 11.9, 'series': 0},
 {'x': 1965, 'y': 11.2, 'series': 0},
 {'x': 1968, 'y': 10.3, 'series': 0},
 {'x': 1971, 'y': 10.4, 'series': 0},
 {'x': 1974, 'y': 9.2, 'series': 0},
 {'x': 1977, 'y': 9.4, 'series': 0},
 {'x': 1980, 'y': 9.8, 'series': 0},
 {'x': 1981, 'y': 9.4, 'series': 0},
 {'x': 1982, 'y': 9.2, 'series': 0},
 {'x': 1983, 'y': 9.4, 'series': 0},
 {'x': 1984, 'y': 9.4, 'series': 0},
 {'x': 1985, 'y': 9.6, 'series': 0},
 {'x': 1986, 'y': 10.0, 'series': 0},
 {'x': 1987, 'y': 10.4, 'series': 0},
 {'x': 1988, 'y': 11.3, 'series': 0},
 {'x': 1989, 'y': 11.8, 'series': 0},
 {'x': 1990, 'y': 11.5, 'series': 0},
 {'x': 1991, 'y': 10.3, 'series': 0},
 {'x': 1992, 'y': 9.6, 'series': 0},
 {'x': 1993, 'y': 9.2, 'series': 0},
 {'x': 1994, 'y': 8.9, 'series': 0},
 {'x': 1995, 'y': 8.8, 'series': 0},
 {'x': 1996, 'y': 9.5, 'series': 0},
 {'x': 1997, 'y': 10.2, 'series': 0},
 {'x': 1998, 'y': 11.0, 'series': 0},
 {'x': 1999, 'y': 10.6, 'series': 0},
 {'x': 2000, 'y': 10.5, 'series': 0},
 {'x': 2001, 'y': 10.3, 'series': 0},
 {'x': 2002, 'y': 10.1, 'series': 0},
 {'x': 2003, 'y': 9.5, 'series': 0},
 {'x': 2004, 'y': 10.6, 'series': 0},
 {'x': 2005, 'y': 12.1, 'series': 0},
 {'x': 2006, 'y': 12.7, 'series': 0},
 {'x': 2007, 'y': 13.6, 'series': 0},
 {'x': 2008, 'y': 13.5, 'series': 0},
 {'x': 2009, 'y': 13.0, 'series': 0},
 {'x': 2010, 'y': 12.9, 'series': 0},
 {'x': 2011, 'y': 12.8, 'series': 0},
 {'x': 2012, 'y': 12.6, 'series': 0},
 {'x': 2013, 'y': 13.1, 'series': 0},
 {'x': 2014, 'y': 13.3, 'series': 0},
 {'x': 2015, 'y': 13.3, 'series': 0},
 {'x': 2016, 'y': 13.3, 'series': 0},
 {'x': 2017, 'y': 13.2, 'series': 0},
 {'x': 2018, 'y': 12.9, 'series': 0},
 {'x': 2019, 'y': 12.9, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax national income (equal-split adult)', type: 'scatter', values: [
{'x': 1900, 'y': 17.2, 'series': 1},
 {'x': 1901, 'y': 16.9, 'series': 1},
 {'x': 1902, 'y': 16.5, 'series': 1},
 {'x': 1903, 'y': 16.4, 'series': 1},
 {'x': 1904, 'y': 16.5, 'series': 1},
 {'x': 1905, 'y': 16.8, 'series': 1},
 {'x': 1906, 'y': 16.8, 'series': 1},
 {'x': 1907, 'y': 16.6, 'series': 1},
 {'x': 1908, 'y': 16.2, 'series': 1},
 {'x': 1909, 'y': 16.0, 'series': 1},
 {'x': 1910, 'y': 16.1, 'series': 1},
 {'x': 1911, 'y': 16.0, 'series': 1},
 {'x': 1912, 'y': 16.1, 'series': 1},
 {'x': 1913, 'y': 16.7, 'series': 1},
 {'x': 1914, 'y': 17.0, 'series': 1},
 {'x': 1915, 'y': 18.7, 'series': 1},
 {'x': 1916, 'y': 20.2, 'series': 1},
 {'x': 1917, 'y': 21.3, 'series': 1},
 {'x': 1918, 'y': 18.6, 'series': 1},
 {'x': 1925, 'y': 10.2, 'series': 1},
 {'x': 1926, 'y': 10.2, 'series': 1},
 {'x': 1927, 'y': 10.4, 'series': 1},
 {'x': 1928, 'y': 10.1, 'series': 1},
 {'x': 1929, 'y': 10.1, 'series': 1},
 {'x': 1932, 'y': 10.2, 'series': 1},
 {'x': 1933, 'y': 9.9, 'series': 1},
 {'x': 1934, 'y': 10.1, 'series': 1},
 {'x': 1935, 'y': 11.0, 'series': 1},
 {'x': 1936, 'y': 12.4, 'series': 1},
 {'x': 1937, 'y': 13.6, 'series': 1},
 {'x': 1938, 'y': 14.5, 'series': 1},
 {'x': 1949, 'y': 8.7, 'series': 1},
 {'x': 1950, 'y': 9.2, 'series': 1},
 {'x': 1954, 'y': 8.7, 'series': 1},
 {'x': 1957, 'y': 10.1, 'series': 1},
 {'x': 1961, 'y': 11.9, 'series': 1},
 {'x': 1965, 'y': 11.2, 'series': 1},
 {'x': 1968, 'y': 10.3, 'series': 1},
 {'x': 1971, 'y': 10.4, 'series': 1},
 {'x': 1974, 'y': 9.2, 'series': 1},
 {'x': 1977, 'y': 9.4, 'series': 1},
 {'x': 1980, 'y': 9.8, 'series': 1},
 {'x': 1981, 'y': 9.4, 'series': 1},
 {'x': 1982, 'y': 9.2, 'series': 1},
 {'x': 1983, 'y': 9.4, 'series': 1},
 {'x': 1984, 'y': 9.4, 'series': 1},
 {'x': 1985, 'y': 9.6, 'series': 1},
 {'x': 1986, 'y': 10.0, 'series': 1},
 {'x': 1987, 'y': 10.4, 'series': 1},
 {'x': 1988, 'y': 11.3, 'series': 1},
 {'x': 1989, 'y': 11.8, 'series': 1},
 {'x': 1990, 'y': 11.5, 'series': 1},
 {'x': 1991, 'y': 10.3, 'series': 1},
 {'x': 1992, 'y': 9.6, 'series': 1},
 {'x': 1993, 'y': 9.2, 'series': 1},
 {'x': 1994, 'y': 8.9, 'series': 1},
 {'x': 1995, 'y': 8.8, 'series': 1},
 {'x': 1996, 'y': 9.5, 'series': 1},
 {'x': 1997, 'y': 10.2, 'series': 1},
 {'x': 1998, 'y': 11.0, 'series': 1},
 {'x': 1999, 'y': 10.6, 'series': 1},
 {'x': 2000, 'y': 10.5, 'series': 1},
 {'x': 2001, 'y': 10.3, 'series': 1},
 {'x': 2002, 'y': 10.1, 'series': 1},
 {'x': 2003, 'y': 9.5, 'series': 1},
 {'x': 2004, 'y': 10.6, 'series': 1},
 {'x': 2005, 'y': 12.1, 'series': 1},
 {'x': 2006, 'y': 12.7, 'series': 1},
 {'x': 2007, 'y': 13.6, 'series': 1},
 {'x': 2008, 'y': 13.5, 'series': 1},
 {'x': 2009, 'y': 13.0, 'series': 1},
 {'x': 2010, 'y': 12.9, 'series': 1},
 {'x': 2011, 'y': 12.8, 'series': 1},
 {'x': 2012, 'y': 12.6, 'series': 1},
 {'x': 2013, 'y': 13.1, 'series': 1},
 {'x': 2014, 'y': 13.3, 'series': 1},
 {'x': 2015, 'y': 13.3, 'series': 1},
 {'x': 2016, 'y': 13.3, 'series': 1},
 {'x': 2017, 'y': 13.2, 'series': 1},
 {'x': 2018, 'y': 12.9, 'series': 1},
 {'x': 2019, 'y': 12.9, 'series': 1}], yAxis: 1}]; 
$scope.data2 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1900, 'y': 18.9, 'series': 0},
 {'x': 1901, 'y': 18.6, 'series': 0},
 {'x': 1902, 'y': 18.1, 'series': 0},
 {'x': 1903, 'y': 18.0, 'series': 0},
 {'x': 1904, 'y': 18.1, 'series': 0},
 {'x': 1905, 'y': 18.5, 'series': 0},
 {'x': 1906, 'y': 18.5, 'series': 0},
 {'x': 1907, 'y': 18.3, 'series': 0},
 {'x': 1908, 'y': 17.9, 'series': 0},
 {'x': 1909, 'y': 17.6, 'series': 0},
 {'x': 1910, 'y': 17.8, 'series': 0},
 {'x': 1911, 'y': 17.6, 'series': 0},
 {'x': 1912, 'y': 17.7, 'series': 0},
 {'x': 1913, 'y': 18.4, 'series': 0},
 {'x': 1914, 'y': 18.7, 'series': 0},
 {'x': 1915, 'y': 20.6, 'series': 0},
 {'x': 1916, 'y': 22.3, 'series': 0},
 {'x': 1917, 'y': 23.4, 'series': 0},
 {'x': 1918, 'y': 20.5, 'series': 0},
 {'x': 1925, 'y': 11.3, 'series': 0},
 {'x': 1926, 'y': 11.2, 'series': 0},
 {'x': 1927, 'y': 11.5, 'series': 0},
 {'x': 1928, 'y': 11.1, 'series': 0},
 {'x': 1929, 'y': 11.1, 'series': 0},
 {'x': 1932, 'y': 11.2, 'series': 0},
 {'x': 1933, 'y': 10.9, 'series': 0},
 {'x': 1934, 'y': 11.1, 'series': 0},
 {'x': 1935, 'y': 12.1, 'series': 0},
 {'x': 1936, 'y': 13.6, 'series': 0},
 {'x': 1937, 'y': 14.9, 'series': 0},
 {'x': 1938, 'y': 16.0, 'series': 0},
 {'x': 1949, 'y': 9.6, 'series': 0},
 {'x': 1950, 'y': 10.1, 'series': 0},
 {'x': 1954, 'y': 9.5, 'series': 0},
 {'x': 1957, 'y': 11.2, 'series': 0},
 {'x': 1961, 'y': 13.1, 'series': 0},
 {'x': 1965, 'y': 12.3, 'series': 0},
 {'x': 1968, 'y': 11.3, 'series': 0},
 {'x': 1971, 'y': 11.4, 'series': 0},
 {'x': 1974, 'y': 10.2, 'series': 0},
 {'x': 1977, 'y': 10.3, 'series': 0},
 {'x': 1980, 'y': 10.7, 'series': 0},
 {'x': 1983, 'y': 9.8, 'series': 0},
 {'x': 1986, 'y': 10.2, 'series': 0},
 {'x': 1989, 'y': 11.4, 'series': 0},
 {'x': 1992, 'y': 9.5, 'series': 0},
 {'x': 1995, 'y': 8.2, 'series': 0},
 {'x': 1998, 'y': 11.8, 'series': 0},
 {'x': 2001, 'y': 11.4, 'series': 0},
 {'x': 2002, 'y': 11.1, 'series': 0},
 {'x': 2003, 'y': 10.5, 'series': 0},
 {'x': 2004, 'y': 11.1, 'series': 0},
 {'x': 2005, 'y': 12.9, 'series': 0},
 {'x': 2006, 'y': 13.2, 'series': 0},
 {'x': 2007, 'y': 14.0, 'series': 0},
 {'x': 2008, 'y': 14.5, 'series': 0},
 {'x': 2009, 'y': 13.2, 'series': 0},
 {'x': 2010, 'y': 13.1, 'series': 0},
 {'x': 2011, 'y': 13.1, 'series': 0},
 {'x': 2012, 'y': 13.0, 'series': 0},
 {'x': 2013, 'y': 13.2, 'series': 0}], yAxis: 1},
 {key: 'WID - Pre-tax fiscal income (tax units, excluding capital gains)', type: 'scatter', values: [
{'x': 1900, 'y': 18.9, 'series': 1},
 {'x': 1901, 'y': 18.6, 'series': 1},
 {'x': 1902, 'y': 18.1, 'series': 1},
 {'x': 1903, 'y': 18.0, 'series': 1},
 {'x': 1904, 'y': 18.1, 'series': 1},
 {'x': 1905, 'y': 18.5, 'series': 1},
 {'x': 1906, 'y': 18.5, 'series': 1},
 {'x': 1907, 'y': 18.3, 'series': 1},
 {'x': 1908, 'y': 17.9, 'series': 1},
 {'x': 1909, 'y': 17.6, 'series': 1},
 {'x': 1910, 'y': 17.8, 'series': 1},
 {'x': 1911, 'y': 17.6, 'series': 1},
 {'x': 1912, 'y': 17.7, 'series': 1},
 {'x': 1913, 'y': 18.4, 'series': 1},
 {'x': 1914, 'y': 18.7, 'series': 1},
 {'x': 1915, 'y': 20.6, 'series': 1},
 {'x': 1916, 'y': 22.3, 'series': 1},
 {'x': 1917, 'y': 23.4, 'series': 1},
 {'x': 1918, 'y': 20.5, 'series': 1},
 {'x': 1925, 'y': 11.3, 'series': 1},
 {'x': 1926, 'y': 11.2, 'series': 1},
 {'x': 1927, 'y': 11.5, 'series': 1},
 {'x': 1928, 'y': 11.1, 'series': 1},
 {'x': 1929, 'y': 11.1, 'series': 1},
 {'x': 1932, 'y': 11.2, 'series': 1},
 {'x': 1933, 'y': 10.9, 'series': 1},
 {'x': 1934, 'y': 11.1, 'series': 1},
 {'x': 1935, 'y': 12.1, 'series': 1},
 {'x': 1936, 'y': 13.6, 'series': 1},
 {'x': 1937, 'y': 14.9, 'series': 1},
 {'x': 1938, 'y': 16.0, 'series': 1},
 {'x': 1949, 'y': 9.6, 'series': 1},
 {'x': 1950, 'y': 10.1, 'series': 1},
 {'x': 1954, 'y': 9.5, 'series': 1},
 {'x': 1957, 'y': 11.2, 'series': 1},
 {'x': 1961, 'y': 13.1, 'series': 1},
 {'x': 1965, 'y': 12.3, 'series': 1},
 {'x': 1968, 'y': 11.3, 'series': 1},
 {'x': 1971, 'y': 11.4, 'series': 1},
 {'x': 1974, 'y': 10.2, 'series': 1},
 {'x': 1977, 'y': 10.3, 'series': 1},
 {'x': 1980, 'y': 10.7, 'series': 1},
 {'x': 1983, 'y': 9.8, 'series': 1},
 {'x': 1986, 'y': 10.2, 'series': 1},
 {'x': 1989, 'y': 11.4, 'series': 1},
 {'x': 1992, 'y': 9.5, 'series': 1},
 {'x': 1995, 'y': 8.2, 'series': 1},
 {'x': 1998, 'y': 11.8, 'series': 1},
 {'x': 2001, 'y': 11.4, 'series': 1},
 {'x': 2002, 'y': 11.1, 'series': 1},
 {'x': 2003, 'y': 10.5, 'series': 1},
 {'x': 2004, 'y': 11.1, 'series': 1},
 {'x': 2005, 'y': 12.9, 'series': 1},
 {'x': 2006, 'y': 13.2, 'series': 1},
 {'x': 2007, 'y': 14.0, 'series': 1},
 {'x': 2008, 'y': 14.5, 'series': 1},
 {'x': 2009, 'y': 13.2, 'series': 1},
 {'x': 2010, 'y': 13.1, 'series': 1},
 {'x': 2011, 'y': 13.1, 'series': 1},
 {'x': 2012, 'y': 13.0, 'series': 1},
 {'x': 2013, 'y': 13.2, 'series': 1}], yAxis: 1}]; 
$scope.data3 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1980, 'y': 6.9, 'series': 0},
 {'x': 1981, 'y': 5.9, 'series': 0},
 {'x': 1982, 'y': 5.2, 'series': 0},
 {'x': 1983, 'y': 5.8, 'series': 0},
 {'x': 1984, 'y': 6.0, 'series': 0},
 {'x': 1985, 'y': 6.0, 'series': 0},
 {'x': 1986, 'y': 6.6, 'series': 0},
 {'x': 1987, 'y': 6.4, 'series': 0},
 {'x': 1988, 'y': 7.2, 'series': 0},
 {'x': 1989, 'y': 6.7, 'series': 0},
 {'x': 1990, 'y': 6.9, 'series': 0},
 {'x': 1991, 'y': 6.3, 'series': 0},
 {'x': 1992, 'y': 5.8, 'series': 0},
 {'x': 1993, 'y': 5.3, 'series': 0},
 {'x': 1994, 'y': 5.2, 'series': 0},
 {'x': 1995, 'y': 5.6, 'series': 0},
 {'x': 1996, 'y': 5.7, 'series': 0},
 {'x': 1997, 'y': 5.8, 'series': 0},
 {'x': 1998, 'y': 5.3, 'series': 0},
 {'x': 1999, 'y': 5.8, 'series': 0},
 {'x': 2000, 'y': 6.7, 'series': 0},
 {'x': 2001, 'y': 6.2, 'series': 0},
 {'x': 2002, 'y': 6.0, 'series': 0},
 {'x': 2003, 'y': 5.9, 'series': 0},
 {'x': 2004, 'y': 7.6, 'series': 0},
 {'x': 2005, 'y': 7.3, 'series': 0},
 {'x': 2006, 'y': 7.7, 'series': 0},
 {'x': 2007, 'y': 8.7, 'series': 0},
 {'x': 2008, 'y': 9.1, 'series': 0},
 {'x': 2009, 'y': 8.3, 'series': 0},
 {'x': 2010, 'y': 8.9, 'series': 0},
 {'x': 2011, 'y': 8.6, 'series': 0},
 {'x': 2012, 'y': 8.6, 'series': 0},
 {'x': 2013, 'y': 10.0, 'series': 0},
 {'x': 2014, 'y': 10.2, 'series': 0},
 {'x': 2015, 'y': 10.1, 'series': 0},
 {'x': 2016, 'y': 10.1, 'series': 0},
 {'x': 2017, 'y': 10.0, 'series': 0},
 {'x': 2018, 'y': 9.8, 'series': 0},
 {'x': 2019, 'y': 9.7, 'series': 0}], yAxis: 1},
 {key: 'WID - Post-tax national income (equal-split adult)', type: 'scatter', values: [
{'x': 1980, 'y': 6.9, 'series': 1},
 {'x': 1981, 'y': 5.9, 'series': 1},
 {'x': 1982, 'y': 5.2, 'series': 1},
 {'x': 1983, 'y': 5.8, 'series': 1},
 {'x': 1984, 'y': 6.0, 'series': 1},
 {'x': 1985, 'y': 6.0, 'series': 1},
 {'x': 1986, 'y': 6.6, 'series': 1},
 {'x': 1987, 'y': 6.4, 'series': 1},
 {'x': 1988, 'y': 7.2, 'series': 1},
 {'x': 1989, 'y': 6.7, 'series': 1},
 {'x': 1990, 'y': 6.9, 'series': 1},
 {'x': 1991, 'y': 6.3, 'series': 1},
 {'x': 1992, 'y': 5.8, 'series': 1},
 {'x': 1993, 'y': 5.3, 'series': 1},
 {'x': 1994, 'y': 5.2, 'series': 1},
 {'x': 1995, 'y': 5.6, 'series': 1},
 {'x': 1996, 'y': 5.7, 'series': 1},
 {'x': 1997, 'y': 5.8, 'series': 1},
 {'x': 1998, 'y': 5.3, 'series': 1},
 {'x': 1999, 'y': 5.8, 'series': 1},
 {'x': 2000, 'y': 6.7, 'series': 1},
 {'x': 2001, 'y': 6.2, 'series': 1},
 {'x': 2002, 'y': 6.0, 'series': 1},
 {'x': 2003, 'y': 5.9, 'series': 1},
 {'x': 2004, 'y': 7.6, 'series': 1},
 {'x': 2005, 'y': 7.3, 'series': 1},
 {'x': 2006, 'y': 7.7, 'series': 1},
 {'x': 2007, 'y': 8.7, 'series': 1},
 {'x': 2008, 'y': 9.1, 'series': 1},
 {'x': 2009, 'y': 8.3, 'series': 1},
 {'x': 2010, 'y': 8.9, 'series': 1},
 {'x': 2011, 'y': 8.6, 'series': 1},
 {'x': 2012, 'y': 8.6, 'series': 1},
 {'x': 2013, 'y': 10.0, 'series': 1},
 {'x': 2014, 'y': 10.2, 'series': 1},
 {'x': 2015, 'y': 10.1, 'series': 1},
 {'x': 2016, 'y': 10.1, 'series': 1},
 {'x': 2017, 'y': 10.0, 'series': 1},
 {'x': 2018, 'y': 9.8, 'series': 1},
 {'x': 2019, 'y': 9.7, 'series': 1}], yAxis: 1}]; 
$scope.data4 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1962, 'y': 16.7, 'series': 0},
 {'x': 1969, 'y': 11.2, 'series': 0},
 {'x': 1973, 'y': 10.2, 'series': 0},
 {'x': 1978, 'y': 10.2, 'series': 0},
 {'x': 1983, 'y': 12.1, 'series': 0},
 {'x': 1984, 'y': 12.6, 'series': 0},
 {'x': 1985, 'y': 11.6, 'series': 0},
 {'x': 1986, 'y': 11.0, 'series': 0},
 {'x': 1987, 'y': 10.4, 'series': 0},
 {'x': 1988, 'y': 11.5, 'series': 0},
 {'x': 1989, 'y': 10.6, 'series': 0},
 {'x': 1990, 'y': 11.2, 'series': 0},
 {'x': 1991, 'y': 11.1, 'series': 0},
 {'x': 1992, 'y': 11.9, 'series': 0},
 {'x': 1993, 'y': 11.6, 'series': 0},
 {'x': 1994, 'y': 12.8, 'series': 0},
 {'x': 1995, 'y': 12.0, 'series': 0},
 {'x': 1996, 'y': 10.8, 'series': 0},
 {'x': 1997, 'y': 10.5, 'series': 0},
 {'x': 1998, 'y': 10.4, 'series': 0},
 {'x': 1999, 'y': 10.6, 'series': 0},
 {'x': 2000, 'y': 11.5, 'series': 0},
 {'x': 2001, 'y': 12.2, 'series': 0},
 {'x': 2002, 'y': 13.0, 'series': 0},
 {'x': 2003, 'y': 13.0, 'series': 0},
 {'x': 2004, 'y': 13.9, 'series': 0},
 {'x': 2005, 'y': 14.0, 'series': 0},
 {'x': 2006, 'y': 14.0, 'series': 0},
 {'x': 2007, 'y': 14.2, 'series': 0},
 {'x': 2008, 'y': 14.5, 'series': 0},
 {'x': 2009, 'y': 15.2, 'series': 0},
 {'x': 2010, 'y': 14.2, 'series': 0},
 {'x': 2011, 'y': 14.4, 'series': 0},
 {'x': 2012, 'y': 14.4, 'series': 0}], yAxis: 1},
 {key: 'Becker (1997) - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1962, 'y': 10.6, 'series': 1},
 {'x': 1969, 'y': 7.1, 'series': 1},
 {'x': 1973, 'y': 6.5, 'series': 1},
 {'x': 1978, 'y': 6.5, 'series': 1},
 {'x': 1983, 'y': 7.7, 'series': 1},
 {'x': 1988, 'y': 8.8, 'series': 1},
 {'x': 2012, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'SOEP - Equivalised disposable household income', type: 'scatter', values: [
{'x': 1962, 'y': null, 'series': 2},
 {'x': 1983, 'y': 12.1, 'series': 2},
 {'x': 1984, 'y': 12.6, 'series': 2},
 {'x': 1985, 'y': 11.6, 'series': 2},
 {'x': 1986, 'y': 11.0, 'series': 2},
 {'x': 1987, 'y': 10.4, 'series': 2},
 {'x': 1988, 'y': 11.5, 'series': 2},
 {'x': 1989, 'y': 10.6, 'series': 2},
 {'x': 1990, 'y': 11.2, 'series': 2},
 {'x': 1991, 'y': 11.1, 'series': 2},
 {'x': 1992, 'y': 11.9, 'series': 2},
 {'x': 1993, 'y': 11.6, 'series': 2},
 {'x': 1994, 'y': 12.8, 'series': 2},
 {'x': 1995, 'y': 12.0, 'series': 2},
 {'x': 1996, 'y': 10.8, 'series': 2},
 {'x': 1997, 'y': 10.5, 'series': 2},
 {'x': 1998, 'y': 10.4, 'series': 2},
 {'x': 1999, 'y': 10.6, 'series': 2},
 {'x': 2000, 'y': 11.5, 'series': 2},
 {'x': 2001, 'y': 12.2, 'series': 2},
 {'x': 2002, 'y': 13.0, 'series': 2},
 {'x': 2003, 'y': 13.0, 'series': 2},
 {'x': 2004, 'y': 13.9, 'series': 2},
 {'x': 2005, 'y': 14.0, 'series': 2},
 {'x': 2006, 'y': 14.0, 'series': 2},
 {'x': 2007, 'y': 14.2, 'series': 2},
 {'x': 2008, 'y': 14.5, 'series': 2},
 {'x': 2009, 'y': 15.2, 'series': 2},
 {'x': 2010, 'y': 14.2, 'series': 2},
 {'x': 2011, 'y': 14.4, 'series': 2},
 {'x': 2012, 'y': 14.4, 'series': 2}], yAxis: 1}]; 
$scope.data5 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1949, 'y': 159.2, 'series': 0},
 {'x': 1951, 'y': 164.0, 'series': 0},
 {'x': 1957, 'y': 162.8, 'series': 0},
 {'x': 1962, 'y': 163.8, 'series': 0},
 {'x': 1966, 'y': 163.6, 'series': 0},
 {'x': 1972, 'y': 160.9, 'series': 0},
 {'x': 1978, 'y': 163.0, 'series': 0},
 {'x': 1990, 'y': 174.4, 'series': 0},
 {'x': 1992, 'y': 174.5, 'series': 0},
 {'x': 1993, 'y': 177.9, 'series': 0},
 {'x': 1994, 'y': 171.3, 'series': 0},
 {'x': 1995, 'y': 174.9, 'series': 0},
 {'x': 1996, 'y': 177.3, 'series': 0},
 {'x': 1997, 'y': 175.0, 'series': 0},
 {'x': 1998, 'y': 174.7, 'series': 0},
 {'x': 1999, 'y': 178.3, 'series': 0},
 {'x': 2000, 'y': 177.6, 'series': 0},
 {'x': 2001, 'y': 173.9, 'series': 0},
 {'x': 2002, 'y': 174.0, 'series': 0},
 {'x': 2003, 'y': 169.4, 'series': 0},
 {'x': 2004, 'y': 175.0, 'series': 0},
 {'x': 2005, 'y': 172.0, 'series': 0},
 {'x': 2006, 'y': 177.9, 'series': 0},
 {'x': 2007, 'y': 177.5, 'series': 0},
 {'x': 2008, 'y': 178.5, 'series': 0},
 {'x': 2009, 'y': 178.8, 'series': 0},
 {'x': 2010, 'y': 178.6, 'series': 0},
 {'x': 2011, 'y': 186.1, 'series': 0},
 {'x': 2012, 'y': 181.2, 'series': 0},
 {'x': 2013, 'y': 186.5, 'series': 0},
 {'x': 2014, 'y': 183.3, 'series': 0},
 {'x': 2015, 'y': 190.2, 'series': 0},
 {'x': 2016, 'y': 181.6, 'series': 0},
 {'x': 2017, 'y': 184.0, 'series': 0},
 {'x': 2018, 'y': 186.4, 'series': 0},
 {'x': 2019, 'y': 184.6, 'series': 0}], yAxis: 1},
 {key: "Atkinson (2008) 'Employer earnings survey (GLE)' - Gross monthly individual earnings", type: 'scatter', values: [
{'x': 1949, 'y': 150.5, 'series': 1},
 {'x': 1951, 'y': 155.1, 'series': 1},
 {'x': 1957, 'y': 153.9, 'series': 1},
 {'x': 1962, 'y': 154.9, 'series': 1},
 {'x': 1966, 'y': 154.7, 'series': 1},
 {'x': 1972, 'y': 152.1, 'series': 1},
 {'x': 1978, 'y': 154.1, 'series': 1},
 {'x': 1990, 'y': 164.9, 'series': 1},
 {'x': 1995, 'y': 165.4, 'series': 1},
 {'x': 2019, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'OECD - Gross individual earnings', type: 'scatter', values: [
{'x': 1949, 'y': null, 'series': 2},
 {'x': 1992, 'y': 174.5, 'series': 2},
 {'x': 1993, 'y': 177.9, 'series': 2},
 {'x': 1994, 'y': 171.3, 'series': 2},
 {'x': 1995, 'y': 174.9, 'series': 2},
 {'x': 1996, 'y': 177.3, 'series': 2},
 {'x': 1997, 'y': 175.0, 'series': 2},
 {'x': 1998, 'y': 174.7, 'series': 2},
 {'x': 1999, 'y': 178.3, 'series': 2},
 {'x': 2000, 'y': 177.6, 'series': 2},
 {'x': 2001, 'y': 173.9, 'series': 2},
 {'x': 2002, 'y': 174.0, 'series': 2},
 {'x': 2003, 'y': 169.4, 'series': 2},
 {'x': 2004, 'y': 175.0, 'series': 2},
 {'x': 2005, 'y': 172.0, 'series': 2},
 {'x': 2006, 'y': 177.9, 'series': 2},
 {'x': 2007, 'y': 177.5, 'series': 2},
 {'x': 2008, 'y': 178.5, 'series': 2},
 {'x': 2009, 'y': 178.8, 'series': 2},
 {'x': 2010, 'y': 178.6, 'series': 2},
 {'x': 2011, 'y': 186.1, 'series': 2},
 {'x': 2012, 'y': 181.2, 'series': 2},
 {'x': 2013, 'y': 186.5, 'series': 2},
 {'x': 2014, 'y': 183.3, 'series': 2},
 {'x': 2015, 'y': 190.2, 'series': 2},
 {'x': 2016, 'y': 181.6, 'series': 2},
 {'x': 2017, 'y': 184.0, 'series': 2},
 {'x': 2018, 'y': 186.4, 'series': 2},
 {'x': 2019, 'y': 184.6, 'series': 2}], yAxis: 1}]; 
$scope.data6 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1902, 'y': 47.2, 'series': 0},
 {'x': 1905, 'y': 47.7, 'series': 0},
 {'x': 1908, 'y': 48.2, 'series': 0},
 {'x': 1911, 'y': 47.2, 'series': 0},
 {'x': 1913, 'y': 45.5, 'series': 0},
 {'x': 1924, 'y': 41.4, 'series': 0},
 {'x': 1927, 'y': 41.1, 'series': 0},
 {'x': 1930, 'y': 42.4, 'series': 0},
 {'x': 1934, 'y': 34.2, 'series': 0},
 {'x': 1953, 'y': 24.6, 'series': 0},
 {'x': 1957, 'y': 25.5, 'series': 0},
 {'x': 1960, 'y': 31.7, 'series': 0},
 {'x': 1963, 'y': 30.6, 'series': 0},
 {'x': 1966, 'y': 27.7, 'series': 0},
 {'x': 1969, 'y': 24.5, 'series': 0},
 {'x': 1972, 'y': 21.5, 'series': 0},
 {'x': 1974, 'y': 20.1, 'series': 0},
 {'x': 1977, 'y': 21.1, 'series': 0},
 {'x': 1980, 'y': 22.2, 'series': 0},
 {'x': 1983, 'y': 22.7, 'series': 0},
 {'x': 1986, 'y': 23.7, 'series': 0},
 {'x': 1989, 'y': 23.0, 'series': 0},
 {'x': 1993, 'y': 19.0, 'series': 0},
 {'x': 1998, 'y': 22.0, 'series': 0},
 {'x': 2003, 'y': 20.9, 'series': 0},
 {'x': 2008, 'y': 23.2, 'series': 0},
 {'x': 2013, 'y': 21.5, 'series': 0},
 {'x': 2018, 'y': 22.9, 'series': 0}], yAxis: 1},
 {key: 'Albers, Bartels and Schularick (2020) - Household net wealth', type: 'scatter', values: [
{'x': 1902, 'y': 47.2, 'series': 1},
 {'x': 1905, 'y': 47.7, 'series': 1},
 {'x': 1908, 'y': 48.2, 'series': 1},
 {'x': 1911, 'y': 47.2, 'series': 1},
 {'x': 1913, 'y': 45.5, 'series': 1},
 {'x': 1924, 'y': 41.4, 'series': 1},
 {'x': 1927, 'y': 41.1, 'series': 1},
 {'x': 1930, 'y': 42.4, 'series': 1},
 {'x': 1934, 'y': 34.2, 'series': 1},
 {'x': 1953, 'y': 24.6, 'series': 1},
 {'x': 1957, 'y': 25.5, 'series': 1},
 {'x': 1960, 'y': 31.7, 'series': 1},
 {'x': 1963, 'y': 30.6, 'series': 1},
 {'x': 1966, 'y': 27.7, 'series': 1},
 {'x': 1969, 'y': 24.5, 'series': 1},
 {'x': 1972, 'y': 21.5, 'series': 1},
 {'x': 1974, 'y': 20.1, 'series': 1},
 {'x': 1977, 'y': 21.1, 'series': 1},
 {'x': 1980, 'y': 22.2, 'series': 1},
 {'x': 1983, 'y': 22.7, 'series': 1},
 {'x': 1986, 'y': 23.7, 'series': 1},
 {'x': 1989, 'y': 23.0, 'series': 1},
 {'x': 1993, 'y': 19.0, 'series': 1},
 {'x': 1998, 'y': 22.0, 'series': 1},
 {'x': 2003, 'y': 20.9, 'series': 1},
 {'x': 2008, 'y': 23.2, 'series': 1},
 {'x': 2013, 'y': 21.5, 'series': 1},
 {'x': 2018, 'y': 22.9, 'series': 1}], yAxis: 1}]; 
$scope.data7 = [
{key: 'Chartbook series', type: 'line', values: [
{'x': 1973, 'y': 85.0, 'series': 0},
 {'x': 1983, 'y': 81.6, 'series': 0},
 {'x': 1988, 'y': 78.2, 'series': 0},
 {'x': 1993, 'y': 74.3, 'series': 0},
 {'x': 1998, 'y': 76.9, 'series': 0},
 {'x': 2002, 'y': 76.4, 'series': 0},
 {'x': 2007, 'y': 77.3, 'series': 0},
 {'x': 2012, 'y': 74.7, 'series': 0}], yAxis: 1},
 {key: 'Frick, Grabka and Hauser (2010) - Per capita net wealth (West Germany, based on EVS data)', type: 'scatter', values: [
{'x': 1973, 'y': 69.0, 'series': 1},
 {'x': 1983, 'y': 66.2, 'series': 1},
 {'x': 1988, 'y': 63.5, 'series': 1},
 {'x': 1993, 'y': 60.3, 'series': 1},
 {'x': 1998, 'y': 62.4, 'series': 1},
 {'x': 2003, 'y': 62.8, 'series': 1},
 {'x': 2012, 'y': null, 'series': 1}], yAxis: 1},
 {key: 'Frick, Grabka and Hauser (2010) - Per capita net wealth (All Germany, based on EVS data)', type: 'scatter', values: [
{'x': 1973, 'y': null, 'series': 2},
 {'x': 1998, 'y': 64.2, 'series': 2},
 {'x': 2003, 'y': 63.8, 'series': 2},
 {'x': 2012, 'y': null, 'series': 2}], yAxis: 1},
 {key: 'Updated estimates provided by Markus Grabka - Per capita net wealth (All Germany, based on SOEP data)', type: 'scatter', values: [
{'x': 1973, 'y': null, 'series': 3},
 {'x': 2002, 'y': 76.4, 'series': 3},
 {'x': 2007, 'y': 77.3, 'series': 3},
 {'x': 2012, 'y': 74.7, 'series': 3}], yAxis: 1}]
});