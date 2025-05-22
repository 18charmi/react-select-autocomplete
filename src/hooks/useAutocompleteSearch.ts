import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { OptionType } from "../components/Autocomplete/types";
import { colourOptions } from "../constants/data";

const filterFn = (inputValue: string) => {
	return colourOptions.filter((i) =>
		i.label.toLowerCase().includes(inputValue.toLowerCase())
	);
};

export const useAutocompleteSearch = () => {
	const [fetching, setFetching] = useState<boolean>(false);

	const search = useCallback(
		debounce((inputValue: string, callback: (options: OptionType[]) => void) => {
			if (!inputValue.trim()) {
				callback([]); // providing default options
				return;
			}

			setFetching(true);

			// mocking the response of options
			setTimeout(() => {
				const filtered = filterFn(inputValue);
				callback(filtered);
				setFetching(false);
			}, 1000);

			// TODO: work with actual api
			// fetchAutoCompleteProducts(inputValue)
			// 	.then((response) => {
			// 		if (response) {
			// 			const suggestions = response.suggestedValues
			// 			callback(suggestions);
			// 		} else {
			// 			callback([]);
			// 		}
			// 	})
			// 	.catch((e) => {
			// 		console.error("Error fetching autocomplete search list", e);
			// 		callback([]);
			// 	})
			// 	.finally(() => setFetching(false));
		}, 300), // Debounce delay
		[],
	);

	return { handleSearch: search, loading: fetching };
};
