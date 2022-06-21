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
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1993.0, 'y': 67.0, 'series': 0 },
                { 'x': 2000.0, 'y': 67.0, 'series': 0 },
                { 'x': 2005.0, 'y': 72.0, 'series': 0 },
                { 'x': 2006.0, 'y': 72.0, 'series': 0 },
                { 'x': 2009.0, 'y': 70.0, 'series': 0 },
                { 'x': 2011.0, 'y': 69.0, 'series': 0 },
                { 'x': 2015.0, 'y': 67.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'Whiteford & van Seventer (2000) Figure 1 - Household per capita income', type: 'scatter', values: [
                { 'x': 1975.0, 'y': 68.0, 'series': 1 },
                { 'x': 1991.0, 'y': 68.0, 'series': 1 },
                { 'x': 1993.0, 'y': null, 'series': 1 },
                { 'x': 1996.0, 'y': 69.0, 'series': 1 },
                { 'x': 2015.0, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'Leibbrandt et al (2010a) - Household per capita income', type: 'scatter', values: [
                { 'x': 1993.0, 'y': 67.0, 'series': 2 },
                { 'x': 2000.0, 'y': 67.0, 'series': 2 },
                { 'x': 2005.0, 'y': 72.0, 'series': 2 },
                { 'x': 2008.0, 'y': 70.0, 'series': 2 },
                { 'x': 2015.0, 'y': null, 'series': 2 }], yAxis: 1
        },
        {
            key: 'StatsSA - Household per capita income', type: 'scatter', values: [
                { 'x': 1993.0, 'y': null, 'series': 3 },
                { 'x': 2006.0, 'y': 72.0, 'series': 3 },
                { 'x': 2009.0, 'y': 70.0, 'series': 3 },
                { 'x': 2011.0, 'y': 69.0, 'series': 3 },
                { 'x': 2015.0, 'y': 67.0, 'series': 3 }], yAxis: 1
        }];
    $scope.data1 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1990.0, 'y': 9.9, 'series': 0 },
                { 'x': 1991.0, 'y': 10.5, 'series': 0 },
                { 'x': 1992.0, 'y': 10.6, 'series': 0 },
                { 'x': 1993.0, 'y': 10.3, 'series': 0 },
                { 'x': 2002.0, 'y': 16.6, 'series': 0 },
                { 'x': 2003.0, 'y': 16.9, 'series': 0 },
                { 'x': 2004.0, 'y': 17.1, 'series': 0 },
                { 'x': 2005.0, 'y': 18.0, 'series': 0 },
                { 'x': 2006.0, 'y': 19.0, 'series': 0 },
                { 'x': 2007.0, 'y': 20.1, 'series': 0 },
                { 'x': 2008.0, 'y': 19.5, 'series': 0 },
                { 'x': 2009.0, 'y': 18.3, 'series': 0 },
                { 'x': 2010.0, 'y': 18.5, 'series': 0 },
                { 'x': 2011.0, 'y': 18.5, 'series': 0 },
                { 'x': 2012.0, 'y': 19.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID  - Pre-tax fiscal income (tax units, individuals)', type: 'scatter', values: [
                { 'x': 1990.0, 'y': 9.9, 'series': 1 },
                { 'x': 1991.0, 'y': 10.5, 'series': 1 },
                { 'x': 1992.0, 'y': 10.6, 'series': 1 },
                { 'x': 1993.0, 'y': 10.3, 'series': 1 },
                { 'x': 2002.0, 'y': 16.6, 'series': 1 },
                { 'x': 2003.0, 'y': 16.9, 'series': 1 },
                { 'x': 2004.0, 'y': 17.1, 'series': 1 },
                { 'x': 2005.0, 'y': 18.0, 'series': 1 },
                { 'x': 2006.0, 'y': 19.0, 'series': 1 },
                { 'x': 2007.0, 'y': 20.1, 'series': 1 },
                { 'x': 2008.0, 'y': 19.5, 'series': 1 },
                { 'x': 2009.0, 'y': 18.3, 'series': 1 },
                { 'x': 2010.0, 'y': 18.5, 'series': 1 },
                { 'x': 2011.0, 'y': 18.5, 'series': 1 },
                { 'x': 2012.0, 'y': 19.2, 'series': 1 }], yAxis: 1
        }];
    $scope.data2 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1914.0, 'y': 22.0, 'series': 0 },
                { 'x': 1915.0, 'y': 21.9, 'series': 0 },
                { 'x': 1916.0, 'y': 22.0, 'series': 0 },
                { 'x': 1917.0, 'y': 22.8, 'series': 0 },
                { 'x': 1918.0, 'y': 21.0, 'series': 0 },
                { 'x': 1919.0, 'y': 19.0, 'series': 0 },
                { 'x': 1920.0, 'y': 20.3, 'series': 0 },
                { 'x': 1921.0, 'y': 21.8, 'series': 0 },
                { 'x': 1922.0, 'y': 19.2, 'series': 0 },
                { 'x': 1923.0, 'y': 19.5, 'series': 0 },
                { 'x': 1924.0, 'y': 19.9, 'series': 0 },
                { 'x': 1925.0, 'y': 20.6, 'series': 0 },
                { 'x': 1926.0, 'y': 20.1, 'series': 0 },
                { 'x': 1927.0, 'y': 19.9, 'series': 0 },
                { 'x': 1928.0, 'y': 20.0, 'series': 0 },
                { 'x': 1929.0, 'y': 20.1, 'series': 0 },
                { 'x': 1930.0, 'y': 20.5, 'series': 0 },
                { 'x': 1931.0, 'y': 20.3, 'series': 0 },
                { 'x': 1932.0, 'y': 19.7, 'series': 0 },
                { 'x': 1933.0, 'y': 19.4, 'series': 0 },
                { 'x': 1934.0, 'y': 18.5, 'series': 0 },
                { 'x': 1935.0, 'y': 18.8, 'series': 0 },
                { 'x': 1936.0, 'y': 18.4, 'series': 0 },
                { 'x': 1937.0, 'y': 17.7, 'series': 0 },
                { 'x': 1938.0, 'y': 17.0, 'series': 0 },
                { 'x': 1939.0, 'y': 16.0, 'series': 0 },
                { 'x': 1944.0, 'y': 18.2, 'series': 0 },
                { 'x': 1945.0, 'y': 20.4, 'series': 0 },
                { 'x': 1946.0, 'y': 23.5, 'series': 0 },
                { 'x': 1947.0, 'y': 21.2, 'series': 0 },
                { 'x': 1948.0, 'y': 22.0, 'series': 0 },
                { 'x': 1949.0, 'y': 17.7, 'series': 0 },
                { 'x': 1954.0, 'y': 14.1, 'series': 0 },
                { 'x': 1955.0, 'y': 14.4, 'series': 0 },
                { 'x': 1956.0, 'y': 13.9, 'series': 0 },
                { 'x': 1957.0, 'y': 13.5, 'series': 0 },
                { 'x': 1958.0, 'y': 12.9, 'series': 0 },
                { 'x': 1959.0, 'y': 12.6, 'series': 0 },
                { 'x': 1961.0, 'y': 11.8, 'series': 0 },
                { 'x': 1963.0, 'y': 13.2, 'series': 0 },
                { 'x': 1964.0, 'y': 13.6, 'series': 0 },
                { 'x': 1965.0, 'y': 13.2, 'series': 0 },
                { 'x': 1967.0, 'y': 12.6, 'series': 0 },
                { 'x': 1969.0, 'y': 13.3, 'series': 0 },
                { 'x': 1971.0, 'y': 12.9, 'series': 0 },
                { 'x': 1974.0, 'y': 12.9, 'series': 0 },
                { 'x': 1975.0, 'y': 12.1, 'series': 0 },
                { 'x': 1978.0, 'y': 10.3, 'series': 0 },
                { 'x': 1979.0, 'y': 9.9, 'series': 0 },
                { 'x': 1980.0, 'y': 10.9, 'series': 0 },
                { 'x': 1981.0, 'y': 11.3, 'series': 0 },
                { 'x': 1982.0, 'y': 12.0, 'series': 0 },
                { 'x': 1983.0, 'y': 11.3, 'series': 0 },
                { 'x': 1984.0, 'y': 11.3, 'series': 0 },
                { 'x': 1985.0, 'y': 10.6, 'series': 0 },
                { 'x': 1986.0, 'y': 10.3, 'series': 0 },
                { 'x': 1987.0, 'y': 8.8, 'series': 0 },
                { 'x': 1988.0, 'y': 9.9, 'series': 0 },
                { 'x': 1989.0, 'y': 10.1, 'series': 0 },
                { 'x': 1990.0, 'y': 10.1, 'series': 0 },
                { 'x': 1991.0, 'y': 10.8, 'series': 0 },
                { 'x': 1992.0, 'y': 10.8, 'series': 0 },
                { 'x': 1993.0, 'y': 10.6, 'series': 0 },
                { 'x': 1994.0, 'y': 11.3, 'series': 0 },
                { 'x': 1995.0, 'y': 12.0, 'series': 0 },
                { 'x': 1996.0, 'y': 12.7, 'series': 0 },
                { 'x': 1997.0, 'y': 13.4, 'series': 0 },
                { 'x': 1998.0, 'y': 14.1, 'series': 0 },
                { 'x': 1999.0, 'y': 14.8, 'series': 0 },
                { 'x': 2000.0, 'y': 15.4, 'series': 0 },
                { 'x': 2001.0, 'y': 16.2, 'series': 0 },
                { 'x': 2002.0, 'y': 16.9, 'series': 0 },
                { 'x': 2003.0, 'y': 17.2, 'series': 0 },
                { 'x': 2004.0, 'y': 17.4, 'series': 0 },
                { 'x': 2005.0, 'y': 18.3, 'series': 0 },
                { 'x': 2006.0, 'y': 19.3, 'series': 0 },
                { 'x': 2007.0, 'y': 20.3, 'series': 0 },
                { 'x': 2008.0, 'y': 19.8, 'series': 0 },
                { 'x': 2009.0, 'y': 18.6, 'series': 0 },
                { 'x': 2010.0, 'y': 18.8, 'series': 0 },
                { 'x': 2011.0, 'y': 18.7, 'series': 0 },
                { 'x': 2012.0, 'y': 19.3, 'series': 0 },
                { 'x': 2013.0, 'y': 19.3, 'series': 0 },
                { 'x': 2014.0, 'y': 19.3, 'series': 0 },
                { 'x': 2015.0, 'y': 19.3, 'series': 0 },
                { 'x': 2016.0, 'y': 19.3, 'series': 0 },
                { 'x': 2017.0, 'y': 19.3, 'series': 0 },
                { 'x': 2018.0, 'y': 19.3, 'series': 0 },
                { 'x': 2019.0, 'y': 19.3, 'series': 0 },
                { 'x': 2020.0, 'y': 21.9, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID  - Pre-tax national income (equal-split adults)', type: 'scatter', values: [
                { 'x': 1914.0, 'y': 22.0, 'series': 1 },
                { 'x': 1915.0, 'y': 21.9, 'series': 1 },
                { 'x': 1916.0, 'y': 22.0, 'series': 1 },
                { 'x': 1917.0, 'y': 22.8, 'series': 1 },
                { 'x': 1918.0, 'y': 21.0, 'series': 1 },
                { 'x': 1919.0, 'y': 19.0, 'series': 1 },
                { 'x': 1920.0, 'y': 20.3, 'series': 1 },
                { 'x': 1921.0, 'y': 21.8, 'series': 1 },
                { 'x': 1922.0, 'y': 19.2, 'series': 1 },
                { 'x': 1923.0, 'y': 19.5, 'series': 1 },
                { 'x': 1924.0, 'y': 19.9, 'series': 1 },
                { 'x': 1925.0, 'y': 20.6, 'series': 1 },
                { 'x': 1926.0, 'y': 20.1, 'series': 1 },
                { 'x': 1927.0, 'y': 19.9, 'series': 1 },
                { 'x': 1928.0, 'y': 20.0, 'series': 1 },
                { 'x': 1929.0, 'y': 20.1, 'series': 1 },
                { 'x': 1930.0, 'y': 20.5, 'series': 1 },
                { 'x': 1931.0, 'y': 20.3, 'series': 1 },
                { 'x': 1932.0, 'y': 19.7, 'series': 1 },
                { 'x': 1933.0, 'y': 19.4, 'series': 1 },
                { 'x': 1934.0, 'y': 18.5, 'series': 1 },
                { 'x': 1935.0, 'y': 18.8, 'series': 1 },
                { 'x': 1936.0, 'y': 18.4, 'series': 1 },
                { 'x': 1937.0, 'y': 17.7, 'series': 1 },
                { 'x': 1938.0, 'y': 17.0, 'series': 1 },
                { 'x': 1939.0, 'y': 16.0, 'series': 1 },
                { 'x': 1944.0, 'y': 18.2, 'series': 1 },
                { 'x': 1945.0, 'y': 20.4, 'series': 1 },
                { 'x': 1946.0, 'y': 23.5, 'series': 1 },
                { 'x': 1947.0, 'y': 21.2, 'series': 1 },
                { 'x': 1948.0, 'y': 22.0, 'series': 1 },
                { 'x': 1949.0, 'y': 17.7, 'series': 1 },
                { 'x': 1954.0, 'y': 14.1, 'series': 1 },
                { 'x': 1955.0, 'y': 14.4, 'series': 1 },
                { 'x': 1956.0, 'y': 13.9, 'series': 1 },
                { 'x': 1957.0, 'y': 13.5, 'series': 1 },
                { 'x': 1958.0, 'y': 12.9, 'series': 1 },
                { 'x': 1959.0, 'y': 12.6, 'series': 1 },
                { 'x': 1961.0, 'y': 11.8, 'series': 1 },
                { 'x': 1963.0, 'y': 13.2, 'series': 1 },
                { 'x': 1964.0, 'y': 13.6, 'series': 1 },
                { 'x': 1965.0, 'y': 13.2, 'series': 1 },
                { 'x': 1967.0, 'y': 12.6, 'series': 1 },
                { 'x': 1969.0, 'y': 13.3, 'series': 1 },
                { 'x': 1971.0, 'y': 12.9, 'series': 1 },
                { 'x': 1974.0, 'y': 12.9, 'series': 1 },
                { 'x': 1975.0, 'y': 12.1, 'series': 1 },
                { 'x': 1978.0, 'y': 10.3, 'series': 1 },
                { 'x': 1979.0, 'y': 9.9, 'series': 1 },
                { 'x': 1980.0, 'y': 10.9, 'series': 1 },
                { 'x': 1981.0, 'y': 11.3, 'series': 1 },
                { 'x': 1982.0, 'y': 12.0, 'series': 1 },
                { 'x': 1983.0, 'y': 11.3, 'series': 1 },
                { 'x': 1984.0, 'y': 11.3, 'series': 1 },
                { 'x': 1985.0, 'y': 10.6, 'series': 1 },
                { 'x': 1986.0, 'y': 10.3, 'series': 1 },
                { 'x': 1987.0, 'y': 8.8, 'series': 1 },
                { 'x': 1988.0, 'y': 9.9, 'series': 1 },
                { 'x': 1989.0, 'y': 10.1, 'series': 1 },
                { 'x': 1990.0, 'y': 10.1, 'series': 1 },
                { 'x': 1991.0, 'y': 10.8, 'series': 1 },
                { 'x': 1992.0, 'y': 10.8, 'series': 1 },
                { 'x': 1993.0, 'y': 10.6, 'series': 1 },
                { 'x': 1994.0, 'y': 11.3, 'series': 1 },
                { 'x': 1995.0, 'y': 12.0, 'series': 1 },
                { 'x': 1996.0, 'y': 12.7, 'series': 1 },
                { 'x': 1997.0, 'y': 13.4, 'series': 1 },
                { 'x': 1998.0, 'y': 14.1, 'series': 1 },
                { 'x': 1999.0, 'y': 14.8, 'series': 1 },
                { 'x': 2000.0, 'y': 15.4, 'series': 1 },
                { 'x': 2001.0, 'y': 16.2, 'series': 1 },
                { 'x': 2002.0, 'y': 16.9, 'series': 1 },
                { 'x': 2003.0, 'y': 17.2, 'series': 1 },
                { 'x': 2004.0, 'y': 17.4, 'series': 1 },
                { 'x': 2005.0, 'y': 18.3, 'series': 1 },
                { 'x': 2006.0, 'y': 19.3, 'series': 1 },
                { 'x': 2007.0, 'y': 20.3, 'series': 1 },
                { 'x': 2008.0, 'y': 19.8, 'series': 1 },
                { 'x': 2009.0, 'y': 18.6, 'series': 1 },
                { 'x': 2010.0, 'y': 18.8, 'series': 1 },
                { 'x': 2011.0, 'y': 18.7, 'series': 1 },
                { 'x': 2012.0, 'y': 19.3, 'series': 1 },
                { 'x': 2013.0, 'y': 19.3, 'series': 1 },
                { 'x': 2014.0, 'y': 19.3, 'series': 1 },
                { 'x': 2015.0, 'y': 19.3, 'series': 1 },
                { 'x': 2016.0, 'y': 19.3, 'series': 1 },
                { 'x': 2017.0, 'y': 19.3, 'series': 1 },
                { 'x': 2018.0, 'y': 19.3, 'series': 1 },
                { 'x': 2019.0, 'y': 19.3, 'series': 1 },
                { 'x': 2020.0, 'y': 21.9, 'series': 1 }], yAxis: 1
        }];
    $scope.data3 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1970.0, 'y': 52.9, 'series': 0 },
                { 'x': 1975.0, 'y': 46.4, 'series': 0 },
                { 'x': 1980.0, 'y': 41.3, 'series': 0 },
                { 'x': 1985.0, 'y': 41.2, 'series': 0 },
                { 'x': 1990.0, 'y': 37.5, 'series': 0 },
                { 'x': 1993.0, 'y': 40.6, 'series': 0 },
                { 'x': 2000.0, 'y': 41.3, 'series': 0 },
                { 'x': 2004.0, 'y': 33.2, 'series': 0 }], yAxis: 1
        },
        {
            key: 'van der Berg and Louw (2004) - Household per capita income', type: 'scatter', values: [
                { 'x': 1970.0, 'y': 49.8, 'series': 1 },
                { 'x': 1975.0, 'y': 43.7, 'series': 1 },
                { 'x': 1980.0, 'y': 38.9, 'series': 1 },
                { 'x': 1985.0, 'y': 38.8, 'series': 1 },
                { 'x': 1990.0, 'y': 35.3, 'series': 1 },
                { 'x': 1993.0, 'y': 38.2, 'series': 1 },
                { 'x': 1995.0, 'y': 38.8, 'series': 1 },
                { 'x': 2000.0, 'y': 37.5, 'series': 1 },
                { 'x': 2004.0, 'y': null, 'series': 1 }], yAxis: 1
        },
        {
            key: 'Leibbrandt et al (2010) - Household per capita income', type: 'scatter', values: [
                { 'x': 1970.0, 'y': null, 'series': 2 },
                { 'x': 1993.0, 'y': 40.6, 'series': 2 },
                { 'x': 2000.0, 'y': 41.3, 'series': 2 },
                { 'x': 2004.0, 'y': 33.2, 'series': 2 }], yAxis: 1
        }];
    $scope.data4 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 2006.0, 'y': 66.6, 'series': 0 },
                { 'x': 2009.0, 'y': 62.1, 'series': 0 },
                { 'x': 2011.0, 'y': 53.2, 'series': 0 },
                { 'x': 2015.0, 'y': 55.5, 'series': 0 }], yAxis: 1
        },
        {
            key: 'StatsSA - Household per capita expenditure', type: 'scatter', values: [
                { 'x': 2006.0, 'y': 66.6, 'series': 1 },
                { 'x': 2009.0, 'y': 62.1, 'series': 1 },
                { 'x': 2011.0, 'y': 53.2, 'series': 1 },
                { 'x': 2015.0, 'y': 55.5, 'series': 1 }], yAxis: 1
        }];
    $scope.data5 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1993.0, 'y': 480.0, 'series': 0 },
                { 'x': 1997.0, 'y': 330.0, 'series': 0 },
                { 'x': 2001.0, 'y': 420.0, 'series': 0 },
                { 'x': 2005.0, 'y': 520.0, 'series': 0 },
                { 'x': 2008.0, 'y': 500.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'OECD - Individual gross monthly wages', type: 'scatter', values: [
                { 'x': 1993.0, 'y': 480.0, 'series': 1 },
                { 'x': 1997.0, 'y': 330.0, 'series': 1 },
                { 'x': 2001.0, 'y': 420.0, 'series': 1 },
                { 'x': 2005.0, 'y': 520.0, 'series': 1 },
                { 'x': 2008.0, 'y': 500.0, 'series': 1 }], yAxis: 1
        }];
    $scope.data6 = [
        {
            key: 'Chartbook series', type: 'line', values: [
                { 'x': 1993.0, 'y': 48.6, 'series': 0 },
                { 'x': 1994.0, 'y': 49.7, 'series': 0 },
                { 'x': 1995.0, 'y': 47.4, 'series': 0 },
                { 'x': 1996.0, 'y': 49.0, 'series': 0 },
                { 'x': 1997.0, 'y': 48.4, 'series': 0 },
                { 'x': 1998.0, 'y': 48.0, 'series': 0 },
                { 'x': 1999.0, 'y': 50.8, 'series': 0 },
                { 'x': 2000.0, 'y': 49.5, 'series': 0 },
                { 'x': 2001.0, 'y': 50.8, 'series': 0 },
                { 'x': 2002.0, 'y': 49.9, 'series': 0 },
                { 'x': 2003.0, 'y': 50.1, 'series': 0 },
                { 'x': 2004.0, 'y': 49.2, 'series': 0 },
                { 'x': 2005.0, 'y': 51.4, 'series': 0 },
                { 'x': 2006.0, 'y': 52.3, 'series': 0 },
                { 'x': 2007.0, 'y': 52.1, 'series': 0 },
                { 'x': 2008.0, 'y': 50.3, 'series': 0 },
                { 'x': 2009.0, 'y': 53.2, 'series': 0 },
                { 'x': 2010.0, 'y': 57.3, 'series': 0 },
                { 'x': 2011.0, 'y': 58.4, 'series': 0 },
                { 'x': 2012.0, 'y': 57.2, 'series': 0 },
                { 'x': 2013.0, 'y': 57.0, 'series': 0 },
                { 'x': 2014.0, 'y': 55.9, 'series': 0 },
                { 'x': 2015.0, 'y': 55.8, 'series': 0 },
                { 'x': 2016.0, 'y': 54.5, 'series': 0 },
                { 'x': 2017.0, 'y': 55.6, 'series': 0 },
                { 'x': 2018.0, 'y': 55.1, 'series': 0 },
                { 'x': 2019.0, 'y': 55.0, 'series': 0 },
                { 'x': 2020.0, 'y': 54.8, 'series': 0 },
                { 'x': 2021.0, 'y': 55.0, 'series': 0 }], yAxis: 1
        },
        {
            key: 'WID - Individual net wealth', type: 'scatter', values: [
                { 'x': 1993.0, 'y': 48.6, 'series': 1 },
                { 'x': 1994.0, 'y': 49.7, 'series': 1 },
                { 'x': 1995.0, 'y': 47.4, 'series': 1 },
                { 'x': 1996.0, 'y': 49.0, 'series': 1 },
                { 'x': 1997.0, 'y': 48.4, 'series': 1 },
                { 'x': 1998.0, 'y': 48.0, 'series': 1 },
                { 'x': 1999.0, 'y': 50.8, 'series': 1 },
                { 'x': 2000.0, 'y': 49.5, 'series': 1 },
                { 'x': 2001.0, 'y': 50.8, 'series': 1 },
                { 'x': 2002.0, 'y': 49.9, 'series': 1 },
                { 'x': 2003.0, 'y': 50.1, 'series': 1 },
                { 'x': 2004.0, 'y': 49.2, 'series': 1 },
                { 'x': 2005.0, 'y': 51.4, 'series': 1 },
                { 'x': 2006.0, 'y': 52.3, 'series': 1 },
                { 'x': 2007.0, 'y': 52.1, 'series': 1 },
                { 'x': 2008.0, 'y': 50.3, 'series': 1 },
                { 'x': 2009.0, 'y': 53.2, 'series': 1 },
                { 'x': 2010.0, 'y': 57.3, 'series': 1 },
                { 'x': 2011.0, 'y': 58.4, 'series': 1 },
                { 'x': 2012.0, 'y': 57.2, 'series': 1 },
                { 'x': 2013.0, 'y': 57.0, 'series': 1 },
                { 'x': 2014.0, 'y': 55.9, 'series': 1 },
                { 'x': 2015.0, 'y': 55.8, 'series': 1 },
                { 'x': 2016.0, 'y': 54.5, 'series': 1 },
                { 'x': 2017.0, 'y': 55.6, 'series': 1 },
                { 'x': 2018.0, 'y': 55.1, 'series': 1 },
                { 'x': 2019.0, 'y': 55.0, 'series': 1 },
                { 'x': 2020.0, 'y': 54.8, 'series': 1 },
                { 'x': 2021.0, 'y': 55.0, 'series': 1 }], yAxis: 1
        }]
});