# Chartbook of Economic Inequality

The data and metadata for each country are hosted on public Google Sheets documents, which can be accessed [here](https://docs.google.com/spreadsheets/d/1jLNfP3iuteUJrH0zS9qWONskyKh9pFcl1hKSlgEc-I8/edit#gid=1578718062).


### Index
|Country|Google sheet URL|
|-------|-----------------|
|Argentina|https://docs.google.com/spreadsheets/d/1Dc8tx6cTio_AugopaxWkcUNKcp_bMEkwZZRmaZ-LkvQ/edit?usp=sharing|
|Australia|https://docs.google.com/spreadsheets/d/1_WIBAjDLO7ufWuBFhRFr-GMl6dLgLz47-uF5EvC48ZY/edit?usp=sharing|
|Brazil|https://docs.google.com/spreadsheets/d/1IaA-lvbRlixYMLy5nW6xxJolaZyO4DK_0XvLQuLjJJs/edit?usp=sharing|
|Canada|https://docs.google.com/spreadsheets/d/1zxuxAXriOrp0x_dxklVbULKGqG3fEOGBkouUNWx7AY8/edit?usp=sharing|
|Finland|https://docs.google.com/spreadsheets/d/1ZakjK-hP6s4tLJZCEFjR7NVVqTkb6AXwgpvfpSwsT-I/edit?usp=sharing|
|France|https://docs.google.com/spreadsheets/d/1sySmwtRs_MvRrcVj52o9b0nG-bzbPMu1haIoSK8IWqk/edit?usp=sharing|
|Germany|https://docs.google.com/spreadsheets/d/1g8gGUHRye1L7hEu3HqYgM56RvjHrc3LD85kBwRZcYj4/edit?usp=sharing|
|Iceland|https://docs.google.com/spreadsheets/d/1YP9WzHiFVPZLLZ91_bMNa-EzrCy9ME_5nmDUZu7SN4A/edit?usp=sharing|
|India|https://docs.google.com/spreadsheets/d/1hyXWzYakYa8NKYHVIvEqjAvV9YeVti4gOxJkT4UqSlI/edit?usp=sharing|
|Indonesia|https://docs.google.com/spreadsheets/d/1A6HH3eHNo2ubWGe6XisQFINtnGcE9d1WmCCHRYGSe8M/edit?usp=sharing|
|Italy|https://docs.google.com/spreadsheets/d/1ovdfVn5BJymTzItKbZsvyt6qDjPoKsVLST23lms_1qc/edit#gid=1830755962|
|Japan|https://docs.google.com/spreadsheets/d/1pwS0793rjAZNcVHf4EbrpIGXBGo8C74oP7p0A9H3HXA/edit?usp=sharing|
|Malaysia|https://docs.google.com/spreadsheets/d/1DOyjueTHGkWQ8-0skJ5c5_tO8x6y4mbUCPp5nhRR30I/edit?usp=sharing|
|Mauritius|https://docs.google.com/spreadsheets/d/1_T_B9cGEGdKX6zNsh3cIUg_dzUlpoJ98oSPOKg7ga7Q/edit?usp=sharing|
|Netherlands|https://docs.google.com/spreadsheets/d/1L_0W3MMKbvcAIOiFGZTkQOcar7JUkzgVgbH0RnMAkag/edit?usp=sharing|
|New Zealand|https://docs.google.com/spreadsheets/d/1-ncVJ4sUG8j_5ThnN3_T9wzWdbo26pr1rYy5xDJF0f4/edit#gid=1830755962|
|Norway|https://docs.google.com/spreadsheets/d/1SNMeX0RWQE-rTkj3rAxK6uZQmQaqa2pr2QFP5wW2kb0/edit#gid=1830755962|
|Portugal|https://docs.google.com/spreadsheets/d/1EdqTg2eDWQZOcuKY-LCNkNwOcrgIFVpl3MxVNIjYhLU/edit?usp=sharing|
|Singapore|https://docs.google.com/spreadsheets/d/1tkNPvqgSfkPdyvRR8GPLkYOVkzNesPKyPFXTiWhT2H0/edit?usp=sharing|
|South Africa|https://docs.google.com/spreadsheets/d/1DG9yxRwQ2QcCOiUU0_u-YqGOtALMNvBboywp9t6tl0I/edit?usp=sharing|
|Spain|https://docs.google.com/spreadsheets/d/1xXFMMP4glUrPevj4-rW04mqKQj8ebPAiP2tKNx8l6QA/edit?usp=sharing|
|Sweden|https://docs.google.com/spreadsheets/d/1Ylee87yl-XL1PMeK9LMgLK5NkIxe5cmb7PdC53AoMWM/edit?usp=sharing|
|Switzerland|https://docs.google.com/spreadsheets/d/1NXeIVqzbCAUGE6KpGLURIDVKUxXK8qBWOWfuo9Wn1Os/edit?usp=sharing|
|UK|https://docs.google.com/spreadsheets/d/1qa1LD_R9F3hdnVcbo-MB6mAMoBOG-IcnSypQXzCeMj0/edit?usp=sharing|
|US|https://docs.google.com/spreadsheets/d/1ONdnOFLa-SxtMe3uxtv1J3hZY16Li9mBf9Oi2gE4YwI/edit?usp=sharing|

### Website structure explained
Country/<br/>
├ `bottom_chart.csv` determines the figures and tooltips in the bottom chart in the final series chart<br/>
├ `c3.v3.js` determines the behaviour of the final series chart<br/>
├ `chart.html` determines the layour of the page, and the series descriptions<br/>
├ `d3.min.js` determines the behaviour of the source series charts<br/>
├ `final_series_chart.js` determines the layour of the final series chart. **Edit this** to change legends<br/>
├ `mv.c3.css` determines the behaviour of the final series chart<br/>
├ `mv.c3.js` determines the behaviour of the final series chart<br/>
├ `nv.d3.min.js` determines the behaviour of the source series charts<br/>
├ `source_series_charts.js` determines the figures and legends in the source series charts<br/>
├ `top_chart.csv` determines the figures and tooltips in the top chart in the final series chart<br/>

The content displayed in the [Chartbook](https://www.chartbookofeconomicinequality.com/) are iframes of html documents hosted by Git Pages in this repo.

### Instructions on how to update the charts

Clone the repository into current working directory (clones entire website repo but we're only interested in the 'chartbook' folder)

```
git clone https://github.com/camappel/camappel.github.io.git
```

Create a virtual environment and activate

```
cd chartbook
python3 -m venv venv
source venv/bin/activate
```

Install necessary packages

```
pip install -r requirements.txt
```

Data is updated with `chartprep.ipynb`. Everything is automated, except for the legends in the final series (more detail below). Run each snippet sequentially.

- Snippet 2. updates the raw data `raw_data.csv`
- Snippet 4. updates the data displayed in the final series charts `bottom_chart.csv`, `top_chart.csv`
- Snippet 5. updates the data displayed in the source series charts `source_series_charts.js`
- Snippet 5. also updates the series descriptions `chart.html`
- Snippet 6. updates the references `chart.html`
- Snippet 7. updates the reference list `References.csv`

The final series legends are determined by `final_series_chart.js`. Ctrl+f and search for '// XXX' to find relevant lines.

***Once the edits are committed, publish a branch and open a pull request.***

**Note:** If you change the number of series displayed in the final chart, `bottom_chart.csv` and `top_chart.csv` will be udpated automatically. However, you will also need to open `final_series_chart.js`, add add/remove a series from `var = series` or `var = top_series`.

###### The data in source_series_charts.js should be formatted as such:

```sh
$scope.data[i] = [
        { 
            key: 'Chartbook series', type: 'line', values: 
                [
                    {'x': year, 'y': value, 'series': 0},
                    {'x': year, 'y': value, 'series': 0},
                    {'x': year, 'y': value, 'series': 0},
                    ...
                ], 
            yAxis: 1 
        }, 
        { 
            key: 'short reference - welfare concept', type: 'scatter', values: 
                [
                    {'x': year, 'y': value, 'series': 1}, 
                    {'x': year, 'y': value, 'series': 1},
                    {'x': year, 'y': value, 'series': 1},
                    ...
                ], 
            yAxis: 1
        },
        { 
            key: 'short reference - welfare concept', type: 'scatter', values: 
                [
                    {'x': year, 'y': value, 'series': j+1},
                    {'x': year, 'y': value, 'series': j+1},
                    {'x': year, 'y': value, 'series': j+1},
                    ...
                ],
            yAxis: 1
        }
        ...
    ];
```


### Data availability
##### Overall Income Inequality

![](README_files/figure-markdown_strict/overall_income_inequality-1.png)

##### Top Income Shares

![](README_files/figure-markdown_strict/top_income_shares-1.png)

##### Poverty

![](README_files/figure-markdown_strict/poverty-1.png)

##### Wealth Inequality

![](README_files/figure-markdown_strict/wealth_inequality-1.png)

##### Earnings Dispersion

![](README_files/figure-markdown_strict/earnings_dispersion-1.png)


