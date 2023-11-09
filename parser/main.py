# Crossword Data from https://xd.saul.pw/data/

import pandas as pd
from collections import defaultdict
import json
    
df = pd.read_csv("data/clues.tsv", sep='\t', on_bad_lines='skip', dtype='unicode', na_filter=False)

# remove 'pupid' and 'year' columns
df  = df.drop(columns=['pubid', 'year'], axis=1)

# remove non-alphanumeric words
df = df.drop(df[df['answer'].str.contains(r'[^A-Z]',na=False)].index)

# remove clues that reference other words in the crossword puzzle
df = df.drop(df[df['clue'].str.contains("-Down|-Across|-down|-across",na=False)].index)
df = df.drop(df[df['clue'].str.contains(r'(?i)([\d][ -]+(Across)|[\d][ -]+Down)',na=False)].index)

# sort answers in alphabetic order
df = df.sort_values('answer', ascending=True)

# remove duplicate answers and clues
df_uniq = df.drop_duplicates()

#print(df.loc[df['answer'] == "ETNA"]['clue'])

# hold count for number of appearances in df, and list of clues
d = {}
d = defaultdict(list)

for index, row in df_uniq.iterrows():
    d[row['answer']].append(row['clue'])

out_file = open("data/data.json", "w")
json.dump(d,out_file,indent=4)
out_file.close()


# df_uniq.to_json('data/data.json', orient='records', lines=True)