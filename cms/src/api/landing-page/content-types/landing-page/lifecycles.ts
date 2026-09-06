const RESERVED_PATHS = [
  '/api',
  '/admin',
  '/admin-preview',
  '/_next',
  '/favicon.ico',
  '/landing',
  '/preview',
];

function normalizePath(value: unknown) {
  if (typeof value !== 'string') {
    return value;
  }

  let path = value.trim().toLowerCase();

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  path = path.replace(/\/+/g, '/');

  if (path.length > 1) {
    path = path.replace(/\/$/, '');
  }

  return path;
}

function validatePath(path: unknown) {
  if (typeof path !== 'string') {
    return;
  }

  const conflictsWithReservedPath = RESERVED_PATHS.some(
    (reservedPath) => path === reservedPath || path.startsWith(`${reservedPath}/`)
  );

  if (conflictsWithReservedPath) {
    throw new Error(`"${path}" is reserved for the application and cannot be managed by the CMS.`);
  }
}

export default {
  beforeCreate(event: { params: { data: Record<string, unknown> } }) {
    event.params.data.path = normalizePath(event.params.data.path);
    validatePath(event.params.data.path);
  },
  beforeUpdate(event: { params: { data: Record<string, unknown> } }) {
    if ('path' in event.params.data) {
      event.params.data.path = normalizePath(event.params.data.path);
      validatePath(event.params.data.path);
    }
  },
};
