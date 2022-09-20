import { range } from "../range/range";

export const frontendPagination = <T>(data: T[], itemsPerPage: number) => {
    const numberOfProducts = data.length;
    const numberOfPages = Math.ceil(numberOfProducts / itemsPerPage);
    const paginatedArray: T[][] = [];
    let start = 0;
    let end = itemsPerPage;

    range(numberOfPages).forEach(() => {
        const page = data.slice(start, end);
        paginatedArray.push(page);

        start += itemsPerPage;
        end += itemsPerPage;
    });
    return paginatedArray;
};
