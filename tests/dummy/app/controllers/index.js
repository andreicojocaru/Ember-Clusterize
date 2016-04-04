import Ember from 'ember';

export default Ember.Controller.extend({
    rows: [],
    type: 'div',
    init: Ember.on('init', function() {
        console.info("Generating rows...");
        
        this.generate(0, 5000, 5000);
    }),
    generate(part, size, total) {
        var type = this.get('type');
        var percents_arr, template;
        
        for (var i = part * size + 1, ii = i + size; i < ii; i++) {
            var percents = i / ii * ((part + 1) / total * 100);
            if (type == 'table') {
                percents_arr = processPercentage(percents * cols, cols, true);
                template = '<tr>';
                template += '<td><div class="progress-parent"><span class="progress-bar" ' + percents_arr.shift() + '></span><span class="progress-content"><b>' + i + '</b></span></div></td>';
                template += '<td><div class="progress-parent"><span class="progress-bar" ' + percents_arr.shift() + '></span><span class="progress-content">' + percents.toFixed(2) + '%</span></div></td>';
                template += '</tr>';
            } else if (type == 'ul' || type == 'ol') {
                percents_arr = this.processPercentage(percents * 1, 1, true);
                template = '<li><div class="progress-parent"><span class="progress-bar" ' + percents_arr.shift() + '></span><span class="progress-content">Row № <b>' + i + '</b>, <b>' + percents.toFixed(2) + '</b>%</span></div></li>';
            } else if (type == 'div') {
                percents_arr = this.processPercentage(percents * 1, 1, true);
                template = '<div class="progress-parent"><span class="progress-bar" ' + percents_arr.shift() + '></span><span class="progress-content">Row № <b>' + i + '</b>, <b>' + percents.toFixed(2) + '</b>%</span></div>';
            }
            
            this.rows.push(template);
        }
    },
    processPercentage(total_progress, total_columns, return_as_attr) {
        var arr = [];
        while (total_progress > 100) {
            arr.push(return_as_attr ? 'style="width: 100%;"' : 100);
            total_progress -= 100;
        }
        total_progress && arr.push(return_as_attr ? 'style="width: ' + total_progress + '%;"' : total_progress);
        for (var i = arr.length; i < total_columns; i++) {
            arr.push(return_as_attr ? '' : 0);
        }
        return arr;
    }
});
