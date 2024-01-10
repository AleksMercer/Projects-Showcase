import React from 'react'
import Footer from './tinycomp/Footer'

function AboutSystem() {
  return (
    <>
      <section className='aboutsystem__description'>
        <h1>О дизайн-системе</h1>
        <p>Наша дизайн-система базируется на&nbsp;глубоком понимании потребностей аудитории и&nbsp;задач арендаторов комплекса. Она призвана сделать взаимодействие с&nbsp;Апраксиным двором интуитивно понятным, удобным и&nbsp;эстетически приятным. Для реализации этих задач необходимо применять разработанные нами принципы и&nbsp;методические рекомендации.</p>
      </section>

      <section className='aboutsystem__table'>
        <h2>Принципы</h2>
        
        <div className='aboutsystem__table-grid'>
          <div className='aboutsystem__table-grid-block'>
            <h4>Сочетание прошлого и настоящего</h4>
            <p>Сохранение исторической ценности Апраксина двора и&nbsp;гармоничное взаимодействие исторических элементов с&nbsp;современными дизайнерскими решениями.</p>
          </div>

          <div className='aboutsystem__table-grid-block'>
            <h4>Сохранение идентичности</h4>
            <p>Поддержание уникальной атмосферы пространства, которая отличает его от&nbsp;других мест в&nbsp;городе, создание особенной обстановки, присущей только Апраксину Двору.</p>
          </div>

          <div className='aboutsystem__table-grid-block'>
            <h4>Простота и эстетичность</h4>
            <p>Отсутствие излишеств и&nbsp;перегруженности декоративными элементами во&nbsp;благо облегчения восприятия, стремление к&nbsp;красоте и&nbsp;гармонии в&nbsp;каждой детали.</p>
          </div>
          
          <div className='aboutsystem__table-grid-block'>
            <h4>Гибкость и адаптивность</h4>
            <p>Создание модульных структур и&nbsp;элементов дизайна, которые могут быть легко перестроены и&nbsp;адаптированы под различные потребности пространства.</p>
          </div>

          <div className='aboutsystem__table-grid-block'>
            <h4>Наглядность и доступность</h4>
            <p>Обеспечение простоты восприятия продуктов для всех категорий посетителей. Использование ясных и&nbsp;наглядных элементов дизайна, легкость навигации и&nbsp;ясное представление информации.</p>
          </div>

          <div className='aboutsystem__table-grid-block'>
            <h4>Визуальная целостность</h4>
            <p>Гармония и&nbsp;согласованность визуального стиля в&nbsp;цифровых продуктах, полиграфических носителях, навигационной графике и&nbsp;других элементах дизайна.</p>
          </div>
        </div>
      </section>

      <section className='aboutsystem__recomendation'>
        <section className='aboutsystem__recomendation-description'>
          <h2>Методические рекомендации</h2>
          <p>Мы&nbsp;собрали общие рекомендации по&nbsp;проектированию контента и&nbsp;разработке пользовательских интерфейсов.</p>
        </section>

        <section className='aboutsystem__recomendation-content'>
          <div>
            <h3>Проектирование контента</h3>
            <p>Грамотный подход к&nbsp;структурированию и&nbsp;визуальному оформлению контента позволяет решать сложные коммуникационные и&nbsp;бизнес-задачи. Контент-дизайн выделяет главное, задает приоритеты, упрощает восприятие информации и&nbsp;взаимодействие с&nbsp;продуктом.</p>
          </div>

          <div>
            <h4>Аудитория и цель</h4>
            <p>Чтобы контент решал поставленные задачи и&nbsp;был максимально эффективным, он&nbsp;должен быть спроектирован для конкретной аудитории, учитывая ее&nbsp;особенности и&nbsp;боли. Чем лучше вы&nbsp;изучите целевую аудиторию, тем проще будет создать контент, отвечающий на&nbsp;их&nbsp;запросы и&nbsp;ожидания. Соответственно любой контент должен решать запросы пользователей и&nbsp;помогать им&nbsp;решать вопросы и&nbsp;осуществлять цели, с&nbsp;которыми они посетили сервис.</p>
          </div>

          <div>
            <h4>Tone of voice</h4>
            <p>Tone of&nbsp;voice Апраксина двора дружелюбный и&nbsp;яркий. Наш язык простой, что облегчает коммуникацию с&nbsp;нашей широкой аудиторией. Мы&nbsp;говорим с&nbsp;теплотой и&nbsp;уважением об&nbsp;истории Апраксина двора, и&nbsp;с&nbsp;позитивным настроем делимся яркими событиями насыщенной культурной жизни пространства сегодня. Не&nbsp;боимся использовать юмор и&nbsp;самоиронию, где это уместно.</p>
          </div>

          <div>
            <h4>Текст</h4>
            <div className='block'>
              <p className='text'>При создании текстового контента для нашего проекта мы&nbsp;рекомендуем придерживаться следующих принципов:</p>
              <div>
                <span>1.</span>
                <p className='mark-text'>Используйте простой, доступный язык без сложных синтаксических конструкций и&nbsp;короткие предложения.</p>
              </div>
              <div>
                <span>2.</span>
                <p className='mark-text'>Старайтесь не&nbsp;перегружать контент большим количеством текста. Лаконичность и&nbsp;емкость&nbsp;&mdash; залог удобочитаемости.</p>
              </div>
              <div>
                <span>3.</span>
                <p className='mark-text'>Используйте настоящее время, чтобы подчеркнуть актуальность.</p>
              </div>
              <div>
                <span>3.</span>
                <p className='mark-text'>Обращайтесь напрямую к&nbsp;пользователю для большей вовлеченности. При обращении используйте местоимение &laquo;вы&raquo;.</p>
              </div>
            </div>
          </div>

          <div>
            <h4>Изображения и видео</h4>
            <p>Визуальный контент повышает доступность информации. Однако мультимедиа должны сопровождаться альтернативной текстовой версией, чтобы их&nbsp;могли воспринять люди с&nbsp;ограниченными возможностями. Добавляйте развернутые текстовые описания к&nbsp;изображениям и&nbsp;субтитры к&nbsp;видео.</p>
          </div>
        </section>

        <section className='aboutsystem__recomendation-interface'>
          <div>
            <h3>Проектирование интерфейса</h3>
            <p>Грамотный подход к&nbsp;структурированию и&nbsp;визуальному оформлению контента позволяет решать сложные коммуникационные и&nbsp;бизнес-задачи. Контент-дизайн выделяет главное, задает приоритеты, упрощает восприятие информации и&nbsp;взаимодействие с&nbsp;продуктом.</p>
          </div>

          <div>
            <h4>Структура</h4>
            <p>Чтобы обеспечить правильную информационную структуру в&nbsp;интерфейсе, необходимо разделять контент на&nbsp;логические блоки с&nbsp;помощью отступов, разделительных линий, цветового выделения областей. Также следует выбирать наиболее эффективные способы и&nbsp;формы передачи информации в&nbsp;каждом конкретном случае. Продуманная структура контента облегчает пользователю понимание, анализ и&nbsp;принятие решений.</p>
          </div>

          <div>
            <h4>Иерархия и навигация</h4>
            <p>Визуальная иерархия элементов помогает создать логическую информационную структуру и&nbsp;задает направление взгляда пользователя. Для создания визуальной иерархии используйте системы заголовков и&nbsp;отступов, а&nbsp;также учитывайте визуальный вес элементов.</p>
          </div>

          <div>
            <h4>UI-киты</h4>
            <p>При проектировании выбирайте UI-киты исходя из&nbsp;задачи, встраивайте компоненты в&nbsp;интерфейс в&nbsp;соответствии с&nbsp;методическими рекомендациями по&nbsp;их&nbsp;использованию.</p>
          </div>
        </section>
      </section>

      <Footer />
    </>
  )
}

export default AboutSystem