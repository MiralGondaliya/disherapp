class NumericUtils {
	private formatNumber = (number:any) : string => {
		if (number < 1000) {
			return number.toString();
		} else if (number < 100000) {
			return (number / 1000).toFixed(1) + 'K';
		} else if (number < 10000000) {
			return (number / 100000).toFixed(1) + 'L';
		} else if (number < 1000000000) {
			return (number / 10000000).toFixed(1) + ' Cr';
		} else {
			return 'Number too large';
		}
	};

	formatLargeNumber = (number: any): string => {
		if (number < 9999999) {
			return this.formatNumber(number);
		} else {
			let suffix = '';
			if (number % 1000000 === 0) {
				suffix = 'L';
			} else {
				suffix = ' Cr';
			}
			// Divide by 10000000 to get the value in millions
			const formattedNumber = (number / 10000000).toFixed(0); // Round to 2 decimal places
			// Insert a decimal separator after the first digit
			return formattedNumber + suffix;
		}
	};


	formatCurrency(number: number) : string {
		// Format the number as Indian Rupees with comma separation
		return number.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
			.split('.')[0];
	}

	roundPercentage = (percentage : number, decimalPlaces: number)=> {
		const factor = Math.pow(10, decimalPlaces);
		return Math.round(percentage * factor) / factor;
	};



}

export const numericUtils = new NumericUtils();
