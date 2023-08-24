import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import styles from "./Parent.module.scss";
import '../../assets/simplebar.scss';

import Item from "./Item";
import EventManager from "../../bridge/bridge";




const Parent = ({parentsData, setParentData}) => {

    const fathers = [
        {name: 'Бенджамин', key: 0},
        {name: 'Даниэль', key: 1},
        {name: 'Джошуа', key: 2},
        {name: 'Ноа', key: 3},
        {name: 'Эндрю', key: 4},
        {name: 'Хуан', key: 5},
        {name: 'Алекс', key: 6},
        {name: 'Айзек', key: 7},
        {name: 'Эван', key: 8},
        {name: 'Итан', key: 9},
        {name: 'Винсент', key: 10},
        {name: 'Энджел', key: 11},
        {name: 'Диего', key: 12},
        {name: 'Адриан', key: 13},
        {name: 'Габриэль', key: 14},
        {name: 'Майкл', key: 15},
        {name: 'Сантьяго', key: 16},
        {name: 'Кевин', key: 17},
        {name: 'Луи', key: 18},
        {name: 'Самуэль', key: 19},
        {name: 'Энтони', key: 20},
        {name: 'Клод', key: 42},
        {name: 'Нико', key: 43},
        {name: 'Джон', key: 44}
    ];
    const mothers = [
        {name: 'Ханна', key: 21},
        {name: 'Одри', key: 22},
        {name: 'Жасмин', key: 23},
        {name: 'Жизель', key: 24},
        {name: 'Амелия', key: 25},
        {name: 'Изабелла', key: 26},
        {name: 'Зоуи', key: 27},
        {name: 'Ава', key: 28},
        {name: 'Камилла', key: 29},
        {name: 'Виолетта', key: 30},
        {name: 'София', key: 31},
        {name: 'Эвелин', key: 32},
        {name: 'Николь', key: 33},
        {name: 'Эшли', key: 34},
        {name: 'Грейс', key: 35},
        {name: 'Брианна', key: 36},
        {name: 'Натали', key: 37},
        {name: 'Оливия', key: 38},
        {name: 'Элизабет', key: 39},
        {name: 'Шарлотта', key: 40},
        {name: 'Эмма', key: 41},
        {name: 'Мисти', key: 45}
    ];
    const [page, setPage] = React.useState(0);

    const fatherID = fathers.findIndex((item) => item.key === parentsData.father);
    const motherID = mothers.findIndex((item) => item.key === parentsData.mother);

    const onSimilarityChange = (value) => {
        EventManager.callServer('characterEditor.onSimilarityChange', value);

        setParentData((prev) => ({
            ...prev,
            similarity: value
        }));
    }
    const onSkinChange = (value) => {
        EventManager.callServer('characterEditor.onSkinChange', value);

        setParentData((prev) => ({
            ...prev,
            skin: value
        }));
    }
    const onParentsReset = React.useCallback((parentsData) => {
        setParentData(JSON.parse(parentsData));
    }, [setParentData]);

    React.useEffect(() => {
        EventManager.on('characterEditor.onParentsReset', onParentsReset);
        EventManager.callServer('characterEditor.setCameraPosition', 0);

        return () => {
          EventManager.remove('characterEditor.onParentsReset', onParentsReset);
        };
    }, [onParentsReset]);

    return (
        <div className={styles.parent}>
            <div className={styles.editor}>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div className={page === 0 ? styles.active : ''}>
                            <button className={page === 0 ? styles.active : ''} onClick={() => setPage(0)}>Отец</button>
                        </div>
                        <div className={`${page === 1 ? styles.active : ''} ${styles.mother}`}>
                            <button className={page === 1 ? styles.active : ''} onClick={() => setPage(1)}>Мать</button>
                        </div>

                    </div>
                    <div className={styles.content}>
                        <SimpleBarReact style={{maxHeight: '100%'}} autoHide={false}>
                            <div className={styles.container}>

                            {
                            page === 0 ? (fathers.map((item, index) => <div className={styles.item} key={item.key}
                                                                            onClick={() => {
                                                                                EventManager.callServer('characterEditor.onChangeFather', item.key);
                                                                                setParentData((prev) => ({
                                                                                    ...prev,
                                                                                    father: item.key
                                                                                }));
                                                                            }}>
                                <Item
                                    text={item.name}
                                    img={require(`../../assets/img/CharacterEditor/parents/male_${item.key}.png`)}
                                    active={fatherID === index}
                                />
                            </div>)) : (mothers.map((item, index) => <div className={styles.item} key={item.key}
                                                                          onClick={() => {
                                                                              EventManager.callServer('characterEditor.onChangeMother', item.key);
                                                                              setParentData((prev) => ({
                                                                                  ...prev,
                                                                                  mother: item.key
                                                                              }));
                                                                          }}>
                                <Item
                                    text={item.name}
                                    img={require(`../../assets/img/CharacterEditor/parents/female_${item.key}.png`)}
                                    active={motherID === index}/>
                            </div>))
                        }
                            </div>
                        </SimpleBarReact>
                    </div>
                    <div className={styles.footer}>
                        <div>
                            <button onClick={() => EventManager.callServer('characterEditor.resetParents')}>Сброс</button>
                        </div>
                        <div>
                            <button onClick={() => EventManager.callServer('characterEditor.randomParents')}>Случайно</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.setting}>
                <div className={styles.preview}>
                    <div className={styles.img}>
                        <img
                            src={require(`../../assets/img/CharacterEditor/parents/female_${mothers[motherID].key}.png`)}
                            alt='mother'/>
                    </div>
                    <div className={styles.img}>
                        <img
                            src={require(`../../assets/img/CharacterEditor/parents/male_${fathers[fatherID].key}.png`)}
                            alt='father'/>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.names}>
                        <div>
                            {mothers[motherID].name}

                        </div>
                        <div>
                            {fathers[fatherID].name}
                        </div>
                    </div>
                    <div className={styles.params}>
                        <div>
                            <p>Схожесть</p>
                            <Slider min={0} max={1} step={0.1} railStyle={{backgroundColor: "white", height: '2px'}}
                                    trackStyle={{backgroundColor: "white", height: '2px'}}
                                    handleStyle={{backgroundColor: "#00c8ff", borderColor: "white"}}
                                    onChange={onSimilarityChange}
                                    value={parentsData.similarity}/>
                        </div>
                        <div>
                            <p>Цвет кожи</p>
                            <Slider min={0} max={10} step={1} railStyle={{backgroundColor: "white", height: '2px'}}
                                    trackStyle={{backgroundColor: "white", height: '2px'}}
                                    handleStyle={{backgroundColor: "#00c8ff", borderColor: "white"}}
                                    onChange={onSkinChange}
                                    value={parentsData.skin}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parent;