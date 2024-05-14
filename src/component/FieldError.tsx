import React from 'react';
import { Box } from './Box';
import { ErrorMessages } from './ErrorMessage';
import { translation } from '@/localisation/localisation';

export enum ErrorType {
	required = 'required',
	maxLength = 'maxLength',
	minLength = 'minLength',
}

export interface FieldErrorProps {
	errorType: string;
	placeholderLabel: string;
	customErrorMessage?: string;
	error: any;
}

export const FieldError: React.FC<FieldErrorProps> = ({
	errorType,
	placeholderLabel,
	customErrorMessage,
	error,
}: FieldErrorProps) => {
	const errorMessage = {
		required: `${placeholderLabel} ${translation.formErrorRequired}`,
	}[errorType];

	if (errorMessage) {
		return <ErrorMessages errorMessage={errorMessage} />;
	}
	if (customErrorMessage) {
		return <ErrorMessages errorMessage={customErrorMessage} />;
	}
	if (error?.message) {
		return <ErrorMessages errorMessage={error?.message} />;
	}
	return <Box />;
};
