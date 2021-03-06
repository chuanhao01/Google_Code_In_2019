# Advanced Solve a machine learning problem using a UCI data_set

This is my submission for Google Code-in 2019 task.

Note: In this markdown, as much as I can, I will screenshot the cell I am talking about and place it here, however I have more comments in the cell itself. Thus I may omit some stuff already in the comments.

[Link](https://colab.research.google.com/drive/1l2W_0HbW94xNZCWt7iuc58lT7F-ixiJZ) to the google colab notebook.

# Question I gave myself to solve  

Based on the data, classify if a person earned <=50K or >50K per year.


## First look at the data  
First thing I did after setting up the links to dl the files using urllib was to look at the data in pandas.

[Link](#data-dictonary) to appendix of the data dictionary  

Below you can see my looking at some basic stats of the data:  

![Look for missing values and some basic stats](content/MD_1.png)  

Looking at some of the raw data:  

![Looking at raw data](content/MD_2.png)  

From this, we can see how some fields are a bit peticular. I'll break them down by columns below.  

- `education-num`
  - This field seems to be continous, however looking at the field closer, we see that it is actually a categorical feature. This is as there are only specific values here which corrospond to the highest level of education a person got.
  - Dropping this column in favour of the categorical `education` column
- `fnlweight` 
  - The data points seem to be spread very far apart in terms of values.
  - Going to standardise all of them
  - Based on past experience, this seems to allow the model to get a slightly better accuracy
- `capital_gain` and `capital_loss`
  - Seem to be very spread out and a lot of the samples have this as 0
  - Have to standardise the values

## Data engineering/cleaning

Here I mapped the label of `'<=50K'` and `'>50K'` to `0` and `1`.  

![Mapping the values](content/MD_3.png)  

Then I scaled the columns `['fnlweight', 'capital_gain', 'capital_loss']` by minmax in scikit-learn.  

![Scaling the values](content/MD_4.png)  

Lasty I dropped the column `education_num` so as to not confuse the estimator with a continous value.  

![Dropping cols](content/MD_5.png)  

## Data and tf preparations  

In this part, I used one of tensorflows tutorial to turn pandas dataframes into batches to input into a tensorflow model.  

Then I used `train_test_split` from `sklearn.preprocessing` to split the train dataset into a train and validation.  

![SC train_test and data prep](content/MD_6.png)  

I then made the feature columns needed by `tf.keras.Sequential` to use.  

![Feature columns](content/MD_7.png)

Creating the keras model  

![Keras model](content/MD_8.png)

## Training and evaluating the models

Below, I trained the `tf.keras` model using `model.fit` on the `train` and `validation` datasets.  

![Training the model](content/MD_9.png)  

Looking at the plots of the accuracy and loss over time(epochs).  

The loss of the model over time.  
![Loss of the model](content/MD_10.png)  

The accuracy of the model over time.  
![Accuracy of the model over time](content/MD_11.png)  

Interesting thing here is that there was a suddent dip in accuracy right at the time when the loss peaked for the validation dataset. I think this was probably due to the model overfitting at that point. The model then tried to not overfit on the train set, which stablised the loss and accuracy of the validation dataset in the next epoch.  

Lastly I evaluate the model by first preping the `test` data in the same way I preped the `train` dataset.  

![Evaluating the model](content/MD_12.png)  

An 84.82% accuracy on the test set. As the accuracy is similar to the validation accuracy, we can assume that the model actually works! Hooray!

## Final thoughts  

Overall I think there is a lot I could improve on this project. One being engineering more features. Also I could have done more EDA to find out if some of the data were skewed and try to account for that.  

Although I do not know where to begin with issues such as those. Overall, this was quite a fun project to see if I could use tensorflow to create a model to classify the income bracket of a person.  

## Update to try and fix weird peaks  
The colab notebook linked has the cells output for running the model for more epochs. Based on the graphs, it seems as though the model is overfitting on the train set. This could be seen from the gradual decrease in the validation accuracy and gradual increase in validation loss over time. However, the train accuracy continued to increase and loss decreased.

This also does not seem to fix the problem with weird peaks as they seem to occur in a pattern.  

Below is a screenshot.  

![Trying to fix weird peaks](content/MD_13.png)

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

Final label - <=50K, >50K  

