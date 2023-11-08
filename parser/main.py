# Data courtesy of https://xd.saul.pw/data/

import pandas as pd
    
df = pd.read_csv("data/clues.tsv", sep='\t', on_bad_lines='skip', dtype='unicode', na_filter=False)

#print(df.contains("NULL"))
# get rid of non-alphanumeric words
df = df.drop(df[df['answer'].str.contains(r'[^A-Z]',na=False)].index)

# sort data 
df = df.sort_values('answer', ascending=True)
print(df)

# print(df.loc[df['answer'] == "NULL"]['clue'])
# print(df['answer'].max())