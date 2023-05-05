type Token = string | null;

export const getToken = (): Promise<Token> => {
	return new Promise((resolve) => {
		chrome.storage.local.get('token', (result: any) => {
			resolve(result.token);
		});
	});
};

export const setToken = (token: Token): Promise<void> => {
	return new Promise((resolve) => {
		chrome.storage.local.set({token}, () => {
			resolve();
		});
	});
};

export const deleteToken = (): Promise<void> => {
	return new Promise((resolve) => {
		chrome.storage.local.remove('token', () => {
			resolve();
		});
	});
};
