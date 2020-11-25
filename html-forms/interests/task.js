let model;

const STATES = {
  UNCHECKED: -1,
  SEMI_CHECKED: 0,
  CHECKED: 1,
}

const parseDOM = (root, parent = null) => {
  const interests = Array.from(root.querySelectorAll(':scope > .interest'));
  return interests.map((interest) => {
    const inputRef = interest.querySelector(':scope > label input');
    const state = STATES.UNCHECKED;
    const itemsContainer = interest.querySelector(':scope > .interests');

    const currentItem = {
      parent,
      inputRef,
      state,
    };
    currentItem.items = itemsContainer ? parseDOM(itemsContainer, currentItem) : [];
    return currentItem;
  });
};

const changeItem = (currentItem) => {
  const state = currentItem.state;
  switch (state) {
    case STATES.UNCHECKED:
      currentItem.state = STATES.CHECKED;
      return;
    case STATES.SEMI_CHECKED:
      currentItem.state = STATES.UNCHECKED;
      return;
    case STATES.CHECKED:
      currentItem.state = STATES.UNCHECKED;
      return;
  }
};

const applyState = (item, direction) => {
  switch (direction) {
    case 'up':
      const parent = item.parent;
      if (!parent) {
        return;
      }
      const newState = (() => {
        const isChecked = parent.items.every((nestedItem) => nestedItem.state === STATES.CHECKED);
        if (isChecked) {
          return STATES.CHECKED;
        }
        const isSemiChecked = parent.items.some((nestedItem) => nestedItem.state === STATES.CHECKED || nestedItem.state === STATES.SEMI_CHECKED);
        if (isSemiChecked) {
          return STATES.SEMI_CHECKED;
        }
        return STATES.UNCHECKED;
      })();
      parent.state = newState;
      applyState(parent, direction);
      return;

    case 'down':
      item.items.forEach((nestedItem) => {
        nestedItem.state = item.state;

        if (nestedItem.items.length) {
          applyState(nestedItem, direction);
        }
      });
      return;
  }
};

const revalidate = (item) => {
  applyState(item, 'down');
  applyState(item, 'up');
};

const render = (modelLevel = model) => {
  modelLevel.forEach((item) => {
    switch (item.state) {
      case STATES.UNCHECKED:
        item.inputRef.checked = false;
        item.inputRef.indeterminate = false;
        break;
      case STATES.SEMI_CHECKED:
        item.inputRef.checked = true;
        item.inputRef.indeterminate = true;
        break;
      case STATES.CHECKED:
        item.inputRef.checked = true;
        item.inputRef.indeterminate = false;
        break;
    }

    if (item.items.length) {
      render(item.items);
    }
  });
};

const addListeners = (modelLevel = model) => {
  modelLevel.forEach((item) => {
    const labelElement = item.inputRef.parentElement;

    labelElement.addEventListener('click', (ev) => {
      if (ev.target === item.inputRef) {
        changeItem(item);
        revalidate(item);
        render();
      }
    })

    if (item.items.length) {
      addListeners(item.items);
    }
  });
};


model = parseDOM(document.querySelector('.interests_main > ul'));
addListeners();

