// Can't do export * from because the d.ts file uses `export =` >_<

// @deno-types="https://github.com/DefinitelyTyped/DefinitelyTyped/raw/master/types/react/index.d.ts"
export {
  createElement,
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
  useLayoutEffect,
  Fragment,
  StrictMode
} from 'https://cdn.esm.sh/v43/react@17.0.2/es2020/react.js'

export type {
  ReactNode,
  MouseEvent,
  ChangeEvent,
  UIEvent,
  FormEvent,
} from 'https://github.com/DefinitelyTyped/DefinitelyTyped/raw/master/types/react/index.d.ts'