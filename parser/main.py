# Crossword Data from https://xd.saul.pw/data/

import pandas as pd
    
df = pd.read_csv("data/clues.tsv", sep='\t', on_bad_lines='skip', dtype='unicode', na_filter=False)

# remove 'pupid' and 'year' columns
df  = df.drop(columns=['pubid', 'year'], axis=1)

# remove duplicate answers and clues
df = df.drop_duplicates()

# remove non-alphanumeric words
df = df.drop(df[df['answer'].str.contains(r'[^A-Z]',na=False)].index)

# sort answers in alphabetic order
df = df.sort_values('answer', ascending=True)

#print(df.loc[df['answer'] == "AMEN"]['clue'])

df.to_json('data/data.json', orient='records', lines=True)