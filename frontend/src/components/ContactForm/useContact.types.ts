type Idle = {
	isLoading: false;
	isSuccess: false;
	apiErrorText: '';
};

type Loading = {
	isLoading: true;
	isSuccess: false;
	apiErrorText: '';
};

type Success = {
	isLoading: false;
	isSuccess: true;
	apiErrorText: '';
};

type Error = {
	isLoading: false;
	isSuccess: false;
	apiErrorText: string;
};

export type ContactState = Idle | Loading | Success | Error;
