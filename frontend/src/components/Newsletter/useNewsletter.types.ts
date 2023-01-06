type Idle = {
	isLoading: false;
	apiErrorText: '';
	isSuccess: false;
};

type Loading = {
	isLoading: true;
	apiErrorText: '';
	isSuccess: false;
};

type Success = {
	isLoading: false;
	apiErrorText: '';
	isSuccess: true;
};

type Error = {
	isLoading: false;
	apiErrorText: string;
	isSuccess: false;
};

export type NewsletterState = Idle | Loading | Success | Error;
