function addToList() {
  const match = /^\s*(\w+)\s*=\s*(\w+)\s*$/.exec(input.value);

  if (!match) {
    alert("Invalid input");
    return;
  }

  const [, key, value] = match;

  const item = document.createElement("li");
  item.setAttribute('data-key', key);
  item.setAttribute('data-value', value);
  item.innerText = `${key}=${value}`;

  list.appendChild(item);
}

function sort(attribute) {
  const sorted = [...list.children].sort((a, b) => a.getAttribute(attribute).localeCompare(b.getAttribute(attribute)));
  list.childNodes.forEach(child => child.remove());
  sorted.forEach(child => list.appendChild(child));
}

function clear() {
  list.children = [];
}

let timeoutId;

function generateXML() {
  const items = [];
  for (const child of list.children)  {
    items.push(`<item key="${child.getAttribute('data-key')}" value="${child.getAttribute('data-value')}"/>`);
  }

  const xml =  `<list>${items.join('')}</list>`;

  console.log(xml);
  navigator.clipboard.writeText(xml);

  clearTimeout(timeoutId);
  xmlLabel.innerText = "XML copied to clipboard and printed to console";
  xmlLabel.classList.remove("hidden");

  timeoutId = setTimeout(() => xmlLabel.classList.add("hidden"), 3000);
}
