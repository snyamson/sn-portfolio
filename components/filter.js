import styles from "../styles/filter.module.css";

const Filter = ({ data, selected, handleSelect }) => {
  const FilterItem = ({ item, onSelect }) => {
    return (
      <>
        <header
          onClick={onSelect}
          className={`
          ${styles.major} 
          ${styles.item} 
            ${selected === item ? styles.active : ""}
      `}
        >
          <p>{item}</p>
        </header>
      </>
    );
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <header
            onClick={() => handleSelect("All")}
            className={`
          ${styles.major} 
          ${styles.item}
           ${selected === "All" ? styles.active : ""}
      `}
          >
            <p>All</p>
          </header>

          {data.map((item, index) => (
            <FilterItem
              key={index}
              item={item?.title}
              onSelect={() => handleSelect(item?.title)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
