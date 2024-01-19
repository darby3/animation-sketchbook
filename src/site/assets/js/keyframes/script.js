console.log('keyframes stuff');

const samples = document.querySelectorAll('.sample');
samples.forEach(sample => {
  const button = sample.querySelector('button');
  const target = sample.querySelector('img');

  button.addEventListener('click', function() {
    target.classList.add('active');
  })

  target.addEventListener('animationend', function() {
    target.classList.remove('active');
  });
});

const props = document.querySelectorAll('.prop');
props.forEach(prop => prop.addEventListener('input', e => {
  const varProp = `--${e.target.getAttribute('name')}`;
  const varValue = e.target.value;
  document.documentElement.style.setProperty(varProp, varValue)
}))

const localProps = document.querySelectorAll('.local-prop');
localProps.forEach(prop => prop.addEventListener('input', e => {
  const varProp = `--${e.target.getAttribute('name')}`;
  const varValue = e.target.value;
  e.target.closest('.sample').style.setProperty(varProp, varValue)
}))
