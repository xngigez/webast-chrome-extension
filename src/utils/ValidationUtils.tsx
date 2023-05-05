/**
 *This module provides utility functions to validate email and password inputs
 * @module ValidationUtils
 */

/**
 * Regular expression pattern to validate an email address.
 * @constant {RegExp}
 * @@default /^\w+([.-]?\w+)@\w+([.-]?\w+)*(.\w{2,3})+$/
 */
const EMAIL_PATTERN_VALIDATION = /^\w+([.-]?\w+)@\w+([.-]?\w+)*(.\w{2,3})+$/;

/**
 * Regular expression pattern to validate a password.
 * @constant {RegExp}
 * @default /^(?=.[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
 */
const PASSWORD_PATTERN_VALIDATION = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{6,}$/;

/** 
 * Check if the given email is valid.
 * @param {string} email - The email to be validated.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
const IsEmailValid = (email: string) => {
	return EMAIL_PATTERN_VALIDATION.test(email);
};


/**
 * Check if the given password is valid.
 * @param {string} password - The password to be validated.
 * @returns {boolean} True if the password is valid, false otherwise.
 */
const IsPasswordValid = (password: string) => {
	return PASSWORD_PATTERN_VALIDATION.test(password);
};

export {
	IsEmailValid,
	IsPasswordValid,
};
