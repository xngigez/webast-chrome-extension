type Token = string | null;

export const getToken = (): Promise<Token> => {
	return new Promise((resolve, reject) => {
		chrome.storage.local.get('token', (result: any) => {
			if (result.token) {
				resolve(result.token);
			} else {
				reject(new Error('Token not found in storage'));
			}
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
