# Advanced Solve a machine learning problem using a UCI data_set

This is my submission for Google Code-in 2019 task.

Note: In this markdown, as much as I can, I will screenshot the cell I am talking about and place it here, however I have more comments in the cell itself. Thus I may omit some stuff already in the comments.


Thought process behind what I did:  

## First look at the data  
First thing I did after setting up the links to dl the files using urllib was to look at the data in pandas.

[Link](data_dict) to appendix of the data dictionary

Below you can see my looking at some basic stats of the data:



## Data_dict

Data dictionary:
age,
workclass,
fnlweight - number of ppl the person believes are below 50K?
education - cat of final education
education-num - num form?
martial-status - category
occupation - pre-defined cat
relationship - relative of their own status?
race
sex
capital-gain - gain?
capital-loss - loss?
hours-per-week - work per week
native-country

Final label - <50 >=50

Read this link later
https://towardsdatascience.com/performing-classification-in-tensorflow-95368fde289c
