// This is where it all goes :)

document.addEventListener('DOMContentLoaded', function () {
  handle_ranking_views();
});

function return_class_list(array_of_class) {
  return array_of_class.join(' ');
}

function handle_ranking_views() {
  const card_button = document.getElementById('card-button');
  const table_button = document.getElementById('table-button');
  const card_svg = document.getElementById('card-svg');
  const table_svg = document.getElementById('table-svg');
  const schools_card_view = document.getElementById('schools_card');
  const schools_table_view = document.getElementById('schools_table');
  const icon_blue = 'text-blue-600';
  const active_state = [
    'bg-slate-900',
    'text-white',
    'flex',
    'items-center',
    'font-semibold',
    'space-x-2',
    'border',
    'rounded-full',
    'px-4',
    'py-2',
  ];
  const inactive_state = [
    'text-slate-700',
    'flex',
    'hover:border-slate-300',
    'space-x-2',
    'items-center',
    'border',
    'rounded-full',
    'px-4',
    'py-2',
  ];
  card_button.addEventListener('click', function () {
    card_button.setAttribute('class', return_class_list(active_state));
    table_button.setAttribute('class', return_class_list(inactive_state));
    card_svg.classList.remove(icon_blue);
    table_svg.classList.add(icon_blue);
    schools_card_view.classList.remove('hidden');
    schools_table_view.classList.add('hidden');
  });

  table_button.addEventListener('click', function () {
    card_button.setAttribute('class', return_class_list(inactive_state));
    table_button.setAttribute('class', return_class_list(active_state));
    card_svg.classList.add(icon_blue);
    table_svg.classList.remove(icon_blue);
    schools_table_view.classList.remove('hidden');
    schools_card_view.classList.add('hidden');
  });
}
