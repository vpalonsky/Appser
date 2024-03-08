import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Some Comments</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
        Nullam vel erat et metus laoreet interdum. Integer in est non nisi
        sollicitudin aliquam sit amet at ligula. Sed porttitor, erat sit amet
        posuere elementum, enim purus eleifend nibh, in tempus sapien eros vitae
        ligula. Nam laoreet, nunc et auctor elementum, leo ligula molestie nulla,
        vitae dignissim dolor urna a odio. Nullam eu accumsan massa.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
        Nullam vel erat et metus laoreet interdum. Integer in est non nisi
        sollicitudin aliquam sit amet at ligula. Sed porttitor, erat sit amet
        posuere elementum, enim purus eleifend nibh, in tempus sapien eros vitae
        ligula. Nam laoreet, nunc et auctor elementum, leo ligula molestie nulla,
        vitae dignissim dolor urna a odio. Nullam eu accumsan massa.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
        Nullam vel erat et metus laoreet interdum. Integer in est non nisi
        sollicitudin aliquam sit amet at ligula. Sed porttitor, erat sit amet
        posuere elementum, enim purus eleifend nibh, in tempus sapien eros vitae
        ligula. Nam laoreet, nunc et auctor elementum, leo ligula molestie nulla,
        vitae dignissim dolor urna a odio. Nullam eu accumsan massa.
      </p>

      <h2>Mas comentarios</h2>
      <img src='https://miro.medium.com/v2/format:webp/0*ZjYSm_q36J4KChdn'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.
        Nullam vel erat et metus laoreet interdum. Integer in est non nisi
        sollicitudin aliquam sit amet at ligula. Sed porttitor, erat sit amet
        posuere elementum, enim purus eleifend nibh, in tempus sapien eros vitae
        ligula. Nam laoreet, nunc et auctor elementum, leo ligula molestie nulla,
        vitae dignissim dolor urna a odio. Nullam eu accumsan massa.
      </p>
    </div>
  `,
  styles: `
    div {
      max-width: 700px
    }
    img {
      width: 100%;
    }
  `
})
export class CommentsComponent {

}
