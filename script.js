function addToList() {
  const match = /^\s*(\w+)\s*=\s*(\w+)\s*$/.exec(input.value);

  if (!match) {
    alert("Invalid input");
    return;
  }

  const [, key, value] = match;

  const item = document.createElement("div");
  item.setAttribute('data-key', key);
  item.setAttribute('data-value', value);
  item.innerText = `${key}=${value}`;

  list.appendChild(item);
}

const orderings = {
  'data-key': true,
  'data-value': true,
};

function sort(attribute) {
  const comparator = (orderings[attribute] = !orderings[attribute]) // toggles the order
    ? (a, b) => a.getAttribute(attribute) > b.getAttribute(attribute)
    : (a, b) => a.getAttribute(attribute) < b.getAttribute(attribute);

  [...list.children].sort(comparator).forEach(child => list.appendChild(child));
}

let timeoutId;

function showXML() {
  const items = [];
  for (const child of list.children) {
    items.push(`<item key="${child.getAttribute('data-key')}" value="${child.getAttribute('data-value')}"/>`);
  }

  const xml =  `<list>${items.join('')}</list>`;
  console.log(xml);

  const isPhone = window.matchMedia("(pointer:coarse)").matches;
  if (isPhone) { // downloads the xml file on mobile
    const a = document.createElement('a');
    a.download = 'list.xml';
    a.href = `data:text/xml,${encodeURIComponent(xml)}`;
    a.click();
  } else { // copies to clipboard on desktop and shows the label
    clearTimeout(timeoutId);
    navigator.clipboard.writeText(xml);

    xmlLabel.innerText = "XML copied to clipboard and printed to console";
    xmlLabel.classList.remove("hidden");

    timeoutId = setTimeout(() => xmlLabel.classList.add("hidden"), 3000);
  }
}
