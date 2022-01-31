const isValidEvent = (event: EventInput | null): boolean => {
  const isObject = typeof event === 'object';
  const hasRequiredProps = event?.timestamp && event?.type;
  const ifStartHasSelectAndGroup =
    event?.type !== 'start' || (event?.select && event?.group);
  const ifSpanHasRange = event?.type !== 'span' || (event?.begin && event?.end);

  const isValid =
    isObject && hasRequiredProps && ifStartHasSelectAndGroup && ifSpanHasRange;

  return isValid ? true : false;
};

export default isValidEvent;
