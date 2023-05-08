// TODO: Add docs.

type Value = any;

export const getItem = (name: string): Promise<Value> => {
	return new Promise((resolve) => {
		chrome.storage.local.get(name, (result: any) => {
			resolve(result[name]);
		});
	});
};

export const setItem = (name: string, value: Value): Promise<void> => {
	return new Promise((resolve) => {
		const item = {[name]: value};
		chrome.storage.local.set(item, () => {
			resolve();
		});
	});
};

export const removeItem = (name: string): Promise<void> => {
	return new Promise((resolve) => {
		chrome.storage.local.remove(name, () => {
			resolve();
		});
	});
};
