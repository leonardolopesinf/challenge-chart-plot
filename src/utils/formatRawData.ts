import isValidEvent from './isValidEvent';

const formatRawData = (rawData: string): EventInput[] => {
  let rows = rawData.split('\n');

  let formattedRows = rows.map((row) => {
    let eventInput: EventInput | null = null;

    try {
      const noSingleQuotes = row.replace(/'/g, '"');

      const objectString = noSingleQuotes.replace(
        /([a-zA-Z1-9_]+)(\s*:(.*?)(,|}))/gi,
        '"$1"$2'
      );

      const formattedRow = JSON.parse(objectString);

      eventInput = formattedRow;
    } catch {
      eventInput = null;
    } finally {
      return isValidEvent(eventInput) ? eventInput : null;
    }
  });

  formattedRows = formattedRows.filter((row) => row);

  return formattedRows as EventInput[];
};

export default formatRawData;
