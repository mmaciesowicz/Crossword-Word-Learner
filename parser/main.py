# Data courtesy of https://xd.saul.pw/data/

import pandas as pd
    
data = pd.read_csv("data/clues.tsv", sep='\t', header=None, on_bad_lines='skip', dtype='unicode')

# print(data[0][0])
