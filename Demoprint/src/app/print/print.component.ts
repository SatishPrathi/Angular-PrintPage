import { Component } from '@angular/core';

@Component({
  selector: 'app-print',
  template: `<div id="print-content" [innerHTML]="htmlContent"></div>`,
  styles: []
})
export class PrintComponent {
  htmlContent: string = ''; 

  constructor() {
    this.htmlContent = `
      <div style="text-align: center;">
        <p style="max-width: 600px; text-align: left;">
          Copyright © 2022 Storyberries <br>
          All rights reserved. <br>
          <br>
          It's Red! No, It's Blue! was written by Andrea Kaczmarek and illustrated by Roxana Calman, with editing and book design by Jade Maitre. <br>
          <br>
          No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law. <br>
          <br>
          For permission requests, write to the publisher at read@storyberries.com <br>
          <br>
          First published in 2022 by Smart Projects Consulting
        </p>
      </div>
    `;
  }

  printDocument(): void {
    let printContents = document.getElementById('print-content')?.innerHTML;
    if (printContents) {
      let originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
    
      window.print();
    
      document.body.innerHTML = originalContents;
    }
  }
}
