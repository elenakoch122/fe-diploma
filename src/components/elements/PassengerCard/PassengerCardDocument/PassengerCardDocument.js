import style from './PassengerCardDocument.module.css';

export default function PassengerCardDocument({ type }) {
  let isPassport;

  const docName = type === 'passport' ? (
    isPassport = true,
    'Паспорт РФ'
  ) : (
    'Свидетельство о рождении'
  );

  return (
    <div className={style.card__document}>
      <label className="label">
        Тип документа
        <input
          className={`input border-928F94-5px ${style.card__document__type}`}
          type="text"
          value={docName}
          title={docName}
        />
      </label>

      {isPassport && <label className="label">
        Серия
        <input
          className={`input border-928F94-5px ${style.card__document__passport}`}
          type="text"
          // pattern="[0-9]{4}"
          maxLength={4}
          placeholder="_ _ _ _" />
      </label>}

      <label className="label">
        Номер
        <input
          className={`input border-928F94-5px ${isPassport ? style.card__document__passport : style.card__document__birthCertificate}`}
          type="text"
          maxLength={isPassport ? 6 : 12}
          placeholder={isPassport ? '_ _ _ _ _ _' : '_ _ _ _ _ _ _ _ _ _ _ _'}
        />
      </label>
    </div>
  );
}