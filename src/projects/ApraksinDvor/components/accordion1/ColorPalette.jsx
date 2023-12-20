import React from 'react'
import Footer from '../tinycomp/Footer'

/* Pic import start */

import colorInterface from '../../media/accordion1/colorpalette/color-interface.svg'

/* Pic import end */

function ColorPalette() {
  return (
    <>  
      <section className='color-description'>
        <h1>Цветовая палитра</h1>
        <p>У Апраксина двора яркая, современная цветовая палитра с отсылкой на ретро. Сочетание основных и вспомогательных цветов поддерживает характер бренда и увеличивает его узнаваемость, а дополнительные технические палитры позволяют дизайн-системе быть более гибкой.</p>
      </section>

      <section className='color-main'>
        <h2>Основные цвета</h2>
        <p>Основные цвета являются приоритетными в использовании как при создании интерфейсов, так и на все носителях фирменного стиля. При этом каждый из основных цветов транслирует ценности бренда.</p>
        <p>Зеленый — надежность и экологичность. <br />Голубой — доверие и легкость. <br />Оранжевый — энергичность и драйв.</p>
        <div className='color-main__colors'>
          <div className='color-main__colors-green'>
            <span>Green</span>
            <p><span>HEX</span><span>#058C50</span></p>
            <p><span>RGB</span><span>5 / 140 / 80</span></p>
          </div>
          <div className='color-main__colors-blue'>
            <span>Green</span>
            <p><span>HEX</span><span>#058CD7</span></p>
            <p><span>RGB</span><span>5 / 140 / 215</span></p>
          </div>
          <div className='color-main__colors-orange'>
            <span>Green</span>
            <p><span>HEX</span><span>#FF5F28</span></p>
            <p><span>RGB</span><span>255 / 90 / 40</span></p>
          </div>
        </div>
      </section>

      <section className='color-additional'>
        <h2>Вспомогательные цвета</h2>
        <p>Вспомогательные цвета всегда используются в дополнение к основным. Желтый и розовый облегчают основную палитру, символизируя собой позитив и дружелюбие.</p>
        <div className='color-additional__colors'>
          <div className='color-additional__colors-green'>
            <span>Green</span>
            <p><span>HEX</span><span>#FFBE14</span></p>
            <p><span>RGB</span><span>255 / 190 / 20</span></p>
          </div>
          <div className='color-additional__colors-blue'>
            <span>Green</span>
            <p><span>HEX</span><span>#FFA5C3</span></p>
            <p><span>RGB</span><span>255 / 165 / 195</span></p>
          </div>
        </div>
      </section>

      <section className='color-opacity'>
        <h2>Прозрачность</h2>
        <p>Для основных и вспомогательных цветов есть 4 уровня прозрачности. Использование этих уровней позволяет делать разработку компонентов и продуктов более гибкой.</p>
        <div className='color-opacity__color-grid'>
          <div style={{backgroundColor: '#058C50'}}>Opacity 100</div>
          <div style={{backgroundColor: '#8ECBB0'}}>Opacity 50</div>
          <div style={{backgroundColor: '#CDE8DC'}}>Opacity 30</div>
          <div style={{backgroundColor: '#E6F3ED'}}>Opacity 15</div>
          <div style={{backgroundColor: '#058CD7'}}>Opacity 100</div>
          <div style={{backgroundColor: '#82C5EB'}}>Opacity 50</div>
          <div style={{backgroundColor: '#B4DDF3'}}>Opacity 30</div>
          <div style={{backgroundColor: '#D9EEF9'}}>Opacity 15</div>
          <div style={{backgroundColor: '#FF5F28'}}>Opacity 100</div>
          <div style={{backgroundColor: '#FF9F7E'}}>Opacity 50</div>
          <div style={{backgroundColor: '#FFCFBF'}}>Opacity 30</div>
          <div style={{backgroundColor: '#FFEFE9'}}>Opacity 15</div>
          <div style={{backgroundColor: '#FFBE14'}}>Opacity 100</div>
          <div style={{backgroundColor: '#FFDF89'}}>Opacity 50</div>
          <div style={{backgroundColor: '#FFEBB9'}}>Opacity 30</div>
          <div style={{backgroundColor: '#FFF5DC'}}>Opacity 15</div>
          <div style={{backgroundColor: '#FFA5C3'}}>Opacity 100</div>
          <div style={{backgroundColor: '#FFC9DB'}}>Opacity 50</div>
          <div style={{backgroundColor: '#FFE4ED'}}>Opacity 30</div>
          <div style={{backgroundColor: '#FFF1F6'}}>Opacity 15</div>
        </div>
      </section>

      <section className='color-gray'>
        <h2>Палитра серого</h2>
        <div className='color-gray__block'>
          <div className='color-gray__block-gray'>
            <div style={{backgroundColor: '#0A2832'}}>#0A2832</div>
            <div style={{backgroundColor: '#37464B'}}>#37464B</div>
            <div style={{backgroundColor: '#738287'}}>#738287</div>
            <div style={{backgroundColor: '#8C9BA0'}}>#8C9BA0</div>
            <div style={{backgroundColor: '#AFBEC3'}}>#AFBEC3</div>
            <div style={{backgroundColor: '#C8D2D7'}}>#C8D2D7</div>
            <div style={{backgroundColor: '#D7E1E6'}}>#D7E1E6</div>
            <div style={{backgroundColor: '#E1EBF0'}}>#E1EBF0</div>
            <div style={{backgroundColor: '#F2F6F9'}}>#F2F6F9</div>
            <div style={{backgroundColor: '#FFFFFF'}}>#FFFFFF</div>
          </div>
          <div className='color-gray__block-text'>
            <p>Палитра серого содержит черный, белый и набор серых оттенков. Палитра серого смещена в сторону сине-зеленых оттенков, что придает уникальность фирменному стилю. </p>
            <p>Палитра серого является технической. Она применима при создании интерактивных компонентов и иерархии слоев и текста в интерфейсе.</p>
          </div>
        </div>
      </section>

      <section className='color-semantic'>
        <h2>Семантические цвета</h2>
        <p>Семантические цвета в интерфейсе облегчают интуитивное восприятие элементов. Использование устоявшихся цветовых ассоциаций позволяет мгновенно выделять статусы, акцентировать важные объекты, упрощает навигацию и ускоряет общее понимание интерфейса.</p>
        <div className='color-semantic__pic'>
          <div className='gray-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="192" viewBox="0 0 195 192" fill="none">
              <path d="M97.5 168C107.103 168 116.612 166.138 125.484 162.519C134.356 158.901 142.417 153.598 149.207 146.912C155.997 140.226 161.384 132.289 165.059 123.553C168.734 114.818 170.625 105.455 170.625 96C170.625 86.5448 168.734 77.1822 165.059 68.4468C161.384 59.7113 155.997 51.7741 149.207 45.0883C142.417 38.4025 134.356 33.099 125.484 29.4807C116.612 25.8623 107.103 24 97.5 24C78.106 24 59.5064 31.5857 45.7928 45.0883C32.0792 58.5909 24.375 76.9044 24.375 96C24.375 115.096 32.0792 133.409 45.7928 146.912C59.5064 160.414 78.106 168 97.5 168ZM186.875 96C186.875 144.6 146.859 184 97.5 184C48.1406 184 8.125 144.6 8.125 96C8.125 47.4 48.1406 8 97.5 8C146.859 8 186.875 47.4 186.875 96ZM85.3125 131.312L49.4487 96L60.9375 84.688L85.3125 108.688L134.062 60.688L145.551 72L85.3125 131.312Z" fill="#058C50"/>
            </svg>
          </div>
          <div className='gray-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="192" viewBox="0 0 195 192" fill="none">
              <path d="M97.5 24C87.8971 24 78.3882 25.8623 69.5163 29.4807C60.6443 33.099 52.5831 38.4025 45.7928 45.0883C39.0025 51.7741 33.6162 59.7114 29.9413 68.4468C26.2664 77.1822 24.375 86.5448 24.375 96C24.375 105.455 26.2664 114.818 29.9413 123.553C33.6162 132.289 39.0025 140.226 45.7928 146.912C52.5831 153.598 60.6443 158.901 69.5163 162.519C78.3882 166.138 87.8971 168 97.5 168C116.894 168 135.494 160.414 149.207 146.912C162.921 133.409 170.625 115.096 170.625 96C170.625 76.9044 162.921 58.5909 149.207 45.0883C135.494 31.5857 116.894 24 97.5 24ZM8.125 96C8.125 47.4 48.1406 8 97.5 8C146.859 8 186.875 47.4 186.875 96C186.875 144.6 146.859 184 97.5 184C48.1406 184 8.125 144.6 8.125 96ZM105.625 52V112H89.375V52H105.625ZM89.375 124H105.658V140.032H89.375V124Z" fill="#FF5F28"/>
            </svg>
          </div>
          <div className='gray-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="193" height="192" viewBox="0 0 193 192" fill="none">
              <path d="M96.4997 168C106.004 168 115.415 166.138 124.196 162.519C132.977 158.901 140.956 153.598 147.677 146.912C154.397 140.226 159.728 132.289 163.365 123.553C167.003 114.818 168.875 105.455 168.875 96C168.875 86.5448 167.003 77.1822 163.365 68.4468C159.728 59.7113 154.397 51.7741 147.677 45.0883C140.956 38.4025 132.977 33.099 124.196 29.4807C115.415 25.8623 106.004 24 96.4997 24C77.3046 24 58.8958 31.5857 45.3228 45.0883C31.7499 58.5909 24.1247 76.9044 24.1247 96C24.1247 115.096 31.7499 133.409 45.3228 146.912C58.8958 160.414 77.3046 168 96.4997 168ZM184.958 96C184.958 144.6 145.353 184 96.4997 184C47.6465 184 8.04132 144.6 8.04133 96C8.04133 47.4 47.6465 7.99999 96.4997 7.99999C145.353 8 184.958 47.4 184.958 96ZM88.458 140L88.458 80L104.541 80L104.541 140L88.458 140ZM104.541 68L88.4258 68L88.4258 51.968L104.541 51.968L104.541 68Z" fill="#058CD7"/>
            </svg>
          </div>
        </div>
        <div className='color-semantic__text'>
          <p>Зеленый цвет обозначает положительную обратную связь от интерфейса, успешность выполнения задачи.</p>
          <p>Оранжевый цвет является предупреждением о проблеме и обращает внимание на моменты, требующие внимания.</p>
          <p>Синий цвет указывает на дополнительные возможности, функции, информацию, подсказки и описания.</p>
        </div>
      </section>

      <section className='color-state'>
        <h2>Цвета состояний</h2>
        <p>Изменение цвета элементов интерфейса при переходе из одного состояния в другое дает пользователю важную обратную связь о результате совершенного действия. Стандартная схема изменения состояний объекта выглядит следующим образом:</p>
        <p>Hover: цвет становится светлее за счет прозрачности 80%<br />Pressed: цвет становится на один шаг темнее, чем в состоянии покоя<br /> Disabled: цвет становится светлее за счет прозрачности 50%</p>
        <div className='color-state__colors'>
          <div style={{backgroundColor: '#D7E1E6'}}>Default</div>
          <div style={{backgroundColor: '#D7E1E6'}}>Hover</div>
          <div style={{backgroundColor: '#D7E1E6'}}>Pressed</div>
          <div style={{backgroundColor: '#D7E1E6'}}>Disabled</div>
          <div style={{backgroundColor: '#058C50'}}>#058C50</div>
          <div style={{backgroundColor: '#37A373'}}>#37A373</div>
          <div style={{backgroundColor: '#047040'}}>#047040</div>
          <div style={{backgroundColor: '#8ECBB0'}}>#8ECBB0</div>
          <div style={{backgroundColor: '#058CD7'}}>#058CD7</div>
          <div style={{backgroundColor: '#44A9E1'}}>#44A9E1</div>
          <div style={{backgroundColor: '#0178BA'}}>#0178BA</div>
          <div style={{backgroundColor: '#82C5EB'}}>#82C5EB</div>
          <div style={{backgroundColor: '#FF5F28'}}>#FF5F28</div>
          <div style={{backgroundColor: '#FF7F53'}}>#FF7F53</div>
          <div style={{backgroundColor: '#E84A13'}}>#E84A13</div>
          <div style={{backgroundColor: '#FF9F7E'}}>#FF9F7E</div>
        </div>
      </section>

      <section className='color-interface'>
        <h2>Цвета в интерфейсе</h2>
        <p>При создании интерфейсов следует руководствоваться следующими отношениями при использовании цветов: 60% — палитра серого, 30% — основные цвета, 10% - второстепенные цвета. </p>
        <img src={colorInterface}  alt="color interface" />
      </section>

      <section className='color-contrast'>
        <h2>Цветовой контраст</h2>
        <p>Принципы контрастности в нашей дизайн-системе основаны на стандартах WCAG 2.0. Для основного текста минимально необходим уровень AA, означающий, что коэффициент контрастности должен быть не менее 4,5. Для крупного декоративного текста, заголовков и решения разного уровня творческих задач допустим уровень AA+ с коэффициент контрастности не менее 3.0. Следуя этим рекомендациям, мы обеспечиваем доступность и качественный пользовательский опыт.</p>
      </section>

      <Footer />
    </>
  )
}

export default ColorPalette