

int main() {
    char itemNames [10][20];
    float prices[10];
    float total = 0, average, lowest, highest;
    int lowestIndex = 0, highestIndex = 0;

    //input the names and the price for 10 itmes
    printf("Enter the name and price for 10 items;\n");
    for (int i = 0; i < 10; i++)
    {
        printf("Enter the name of item %d: ",i + 1);
        scanf("%s", &itemNames[i]); //Reads the name of the items 

        printf ("Enter price of %s:", itemNames[i]);
        scanf("%s", &prices[i]); //read the price of items

        //add to the total price
        total += prices[i];

        //check the lowest and the highest price 
        if (i == 0)
        {
            lowest = prices [i];
            highest = prices[i];
        }
        else {
            if (prices[i] < lowest) 
            {
                //update lowest
                lowest = prices [i];
                lowestIndex = i;

            }
            if (prices[i]> highest)
            {
                //update highest
                highest = prices[i];
                highestIndex = i;
            }
            
        }

    }
    //calculate average
    average = total/10;

    //display the results 
    printf("\n total price: %.2f\n", total);
    printf("average price: %.2f\n", average);
    printf("Lowest price item: %s with %.2f\n", itemNames[lowestIndex], lowest);
    printf("Highest price item: %s with %.2f\n", itemNames[highestIndex],highest);

    return 0;
    
}