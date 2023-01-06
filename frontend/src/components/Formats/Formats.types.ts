export interface FormatsProps {
	formats: { id: number; text: string; promotion?: boolean }[];
	activeFormat: string;
	changeActiveFormat: (type: string, promotion: boolean | undefined) => void;
}
