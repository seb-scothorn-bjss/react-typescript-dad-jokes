export const concatClassNames = (classNames: (string | undefined)[]) => {
	const result = classNames.filter((className) => className != null);

	return result.join(' ');
};
