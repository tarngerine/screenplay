export interface Document {
  title: string;
  authorId: string;
  children: string[];
}

export interface Block {
  id: string;
  children: string[];
}

export interface LayoutBlock extends Block {
  type: 'layout',
  layout: 'row' | 'stack' | 'tree';
}

export interface DesignBlock extends Block {
  designId: string;
}

export interface Design  {
  id: string;
  type: 'symaphore' | 'figma' | 'framer' | 'origami';
  url: string;
}
