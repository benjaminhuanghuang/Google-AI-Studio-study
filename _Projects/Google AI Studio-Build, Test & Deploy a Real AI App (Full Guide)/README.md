# Google AI Studio: Build, Test & Deploy a Real AI App (Full Guide)

https://www.youtube.com/watch?v=Lnkv0-GLU3w

https://github.com/EricTechPro/Bank-Statement-OCR

## Step 1

Select model and the system instructions template

```prompt
The goal is to build a bank statement OCR system. It takes images and PDF files as input and extracts the information. The extracted data is then put into a CSV format. The CSV file contains:
- Transaction date
- Transaction title or description
- The amount
- Any notes about the transactions
```

refine

```prompt

Build a bank statement OCR tool:
INPUT: Upload PDF/image bank statement
OUTPUT: CSV table with these columns:
| Date | Description | Amount | Category | Notes |

REQUIREMENTS:
Use Gemini 2.0 Flash Vision to extract ALL transactions

Date format: YYYY-MM-DD
Amount: positive for deposits, negative for expenses
Category: auto-detect (groceries, dining, transport, salary, bills, etc.)
Handle multi-page PDFs
Skip headers, totals, non-transaction rows
Output clean CSV ready to copy-paste into Google Sheets

Provide extraction code with clear instructions.
```

## Step 2: Add third party features

- Analyze image

## Step3: Manually edit the code

## Step4: Make changes

```prompt
For the extracted transaction table, I want to show exactly how much is being spent in this transaction or this transaction table. I want to be able to see how many records we have for all the transactions, as well as the total spending and the total income from this statement.

Create a section that shows this base on the calculation that we have instead of table
```

To improve the `copy to CSV`, Paste the screenshot and ask

```prompt
When I copy to the CSV using the "copy to CSV" button, here is what the format looks like after I paste it.
Can you be able to format the CSV format here to make it fit for all the columns and all the cells inside of our Google Sheets?
```

## Add functionality

```prompt
Please add functionality that allows uses to upload multiple PDF or PNG files, to analyze the entire bank statement.
```

## View diff, Restore checkpoint

## Add progressbar

```prompt
I want to implement a feature where it can show the progress of file processing. Specifically, I want to display:

- The total number of files that have been loaded.
- The number of files currently pending.
- The number of files that have been completed.

This would be more informative than just showing a spinning icon, which might lead users to believe the system is stalled or in a non-responsive state. This enhanced visibility would allow users to see precisely how many files have been processed and which ones are
```

## Save to Github

## Publish
