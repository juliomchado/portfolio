

export function formatDateForCardUtils(date: string) {


        const initialProjectYear = date.split('-')[0].split(' ')[0];
        const finalProjectYear = date.split('-')[1].split(' ')[2];

        const initalProjectMonth = date.split('-')[0].split(' ')[1];
        const finalProjectMonth = date.split('-')[1].split(' ')[1];
        
    
        const monthsString = `${initalProjectMonth} - ${finalProjectMonth}`;

        const test = ` ${initialProjectYear} ${monthsString} ${finalProjectYear}`;
        console.log(test)

        return {
            initialProjectYear,
            finalProjectYear,
            months: monthsString
        }
  
}