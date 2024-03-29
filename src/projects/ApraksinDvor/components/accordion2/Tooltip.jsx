import React from 'react'

import Footer from '../tinycomp/Footer'

/* Pic import start */

import map from '../../media/accordion2/tooltip/map.png'
import build from '../../media/accordion2/tooltip/tooltip-build.png'
import example from '../../media/accordion2/tooltip/tooltip-example.png'

/* Pic import end */

function Tooltip() {
  return (
    <>
      <section className='tooltip-description'>
        <h1>Tooltip</h1>
        <p>Всплывающие подсказки отображают дополнительную информацию при наведении курсора или фокусировке, которая является контекстуальной, полезной, но&nbsp;несущественной, что одновременно обеспечивая возможность общения и&nbsp;ясность для пользователя.</p>
      </section>

      <section className='tooltip-usage'>
        <h2>Использование</h2>
        <p>Всплывающие подсказки применяются в&nbsp;интерфейсе для добавления контекста и&nbsp;пояснений к&nbsp;различным элементам управления, таким как кнопки и&nbsp;поля ввода. Они полезны, когда эти элементы могут вызвать вопросы у&nbsp;пользователя и&nbsp;требуют дополнительных сведений.</p>
        <p>Подсказки следует размещать рядом с&nbsp;соответствующим интерактивным компонентом так, чтобы они появлялись при наведении курсора или в&nbsp;фокусе. Текст должен быть краток и&nbsp;понятен&nbsp;&mdash; не&nbsp;более 2-3&nbsp;строк. Нельзя включать в&nbsp;подсказки интерактивные элементы, поскольку они будут недоступны.</p>
        <img src={map}  alt="Пример карты где используются Tooltip" />
      </section>

      <section className='tooltip-content'>
        <h2>Содержание</h2>
        <p>Подсказка содержит контейнер, внутри которого в&nbsp;зависимости от&nbsp;задачи могут находиться разные элементы оформления и&nbsp;контента. Это позволяет гибко использовать подсказки.</p>
        <p>В&nbsp;простейшем варианте контейнер содержит только текстовое описание функции элемента или его назначения. Если нужны структура и&nbsp;выделение важного момента, можно добавить короткий заголовок.</p>
        <p>Для большего привлечения внимания к&nbsp;подсказке возможно размещение иконки, отражающей тематику содержания. Комбинирование заголовка, описательного текста и&nbsp;иконок усиливает поясняющую и&nbsp;навигационную функцию подсказок.</p>
        <img src={example}  alt="Примеры внешнего вида tooltip" />
      </section>

      <section className='tooltip-build'>
        <h2>Принципы построения</h2>

        <div className='tooltip-build__container'>
          <img src={build}  alt="Строение Tooltip" />

          <div className='tooltip-build__container-text'>
            <p>Подсказка имеет динамически изменяющийся по&nbsp;размерам контейнер, зависящий от&nbsp;его наполнения. При этом важно соблюдать отступы внутри контейнера, они равны 12&nbsp;px с&nbsp;каждой стороны.</p>
            <p>Tooltip всегда располагается снизу интерактивного элемента, к&nbsp;которому он&nbsp;принадлежит, расстояние между ними равно 8&nbsp;px.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Tooltip


