import csv
with open('Food_Display_Table.csv', newline='') as f:
    reader = csv.reader(f,delimiter=':',quoting=csv.QUOTE_NONE)
    for row in reader:
        print(row)


"""
with open('Food_Display_Table.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
            line_count += 1
    print(f'Processed {line_count} lines.')"""

"""import pandas
df = pandas.read_csv('Food_Display_Table.csv', 
            index_col='Display_Name', 
            parse_dates=['Portion_Default'], 
            header=0, 
            names=['Display_Name', 'Portion_Default', 'Sick Days'])
print(df)"""

