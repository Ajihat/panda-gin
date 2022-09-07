import { Data } from "./frontendPagination.types";

export const frontendPagination = (data: Data, itemsPerPage: number) => {
    const numberOfProducts = data.length;
    const numberOfPages = Math.ceil(numberOfProducts / itemsPerPage);
    const paginatedArray = [];
    let start = 0;
    let end = itemsPerPage;

    for (let i = 0; i < numberOfPages; i++) {
        const page = data.slice(start, end);
        paginatedArray.push(page);

        start += itemsPerPage;
        end += itemsPerPage;
    }
    return paginatedArray;
};
