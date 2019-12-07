# Advanced Solve a machine learning problem using a UCI data_set

This is my submission for Google Code-in 2019 task.

Note: In this markdown, as much as I can, I will screenshot the cell I am talking about and place it here, however I have more comments in the cell itself. Thus I may omit some stuff already in the comments.


Thought process behind what I did:  

## First look at the data  
First thing I did after setting up the links to dl the files using urllib was to look at the data in pandas.

[Link](#data-dictonary) to appendix of the data dictionary  

Below you can see my looking at some basic stats of the data:  

![Look for missing values and some basic stats](content/MD_1.png)  

Looking at some of the raw data:  

![Looking at raw data](content/MD_2.png)

From this, we can see how some fields are a bit peticular. I'll break them down by columns below.  

- `education-num`
  - This field seems to be continous, however look at the field closer, we see that it is actually a categorical feature. This is as there are only specific values here which corrospond to the highest level of education a person got.
  - Dropping this column in favour of the categorical `education` column
- `fnlweight` 
  - The data points seem to be spread very far apart in terms of values.
  - Going to standardise all of them
- `capital_gain` and `capital_loss`
  - Seem to be very spread out and a lot of the samples have this as 0
  - could create a new `net_capital_change` column

## Apendix

### Data dictonary

age - continous
workclass - categorical
fnlweight - number of ppl the person believes are below 50K(?), continous
education - category of final education
education-num - number of years in education, continous
martial-status - category
occupation - pre-defined category
relationship - relative to the person themselves
race - categorical
sex - categorical
capital-gain - continous
capital-loss - continous
hours-per-week - number of hours worked per week
native-country - categorical

Final label - <50, >=50

