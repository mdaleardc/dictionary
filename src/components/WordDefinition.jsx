const WordDefinition = ({ data }) => {
  // Ensure data and data[0] are defined before accessing properties
  const phonetic = data && data.length > 0
    ? data[0].phonetic || data[0].phonetics?.find(item => item.text)?.text || "Phonetic not available"
    : "Phonetic not available";

  return (
    <>
      {data && data.length > 0 ? (
        data[0].meanings.map((item, index) => (
          <div key={index}>
            <p className="text-gray-600 pt-5">Part of Speech: {item.partOfSpeech}</p>

            {item.definitions.length > 0 && (
              <div>
                <p>Definition:</p>
                {item.definitions.map((def, i) => (
                  <p key={i}>{def.definition}</p>
                ))}
              </div>
            )}

            {item.synonyms.length > 0 && (
              <div>
                <p>Synonyms:</p>
                {item.synonyms.map((syno, i) => (
                  <span key={i}> {syno}, </span>
                ))}
              </div>
            )}

            {item.antonyms.length > 0 && (
              <div>
                <p>Antonyms:</p>
                {item.antonyms.map((anto, i) => (
                  <span key={i}> {anto}, </span>
                ))}
              </div>
            )}
          </div>
        ))
      ) : ""}
    </>
  );
};

export default WordDefinition;